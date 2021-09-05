require 'net/http'
require 'json'

class ExchangeController < ApplicationController
    def convert
        exchange_params
        begin
            initValue = Float(params[:value])
        rescue ArgumentError
            render status: :bad_request, json: {
                error: invalid_value(params[:value])
            }
            return
        end
        curr1Code = params[:currency1].upcase
        curr2Code = params[:currency2].upcase
        rate = exchange_rate(curr1Code, curr2Code)
        render status: :ok, json: {
            currency1: curr1Code,
            currency2: curr2Code,
            initValue: initValue,
            convertedValue: rate*initValue,
        }
    end

    private
    def exchange_params
      params.require(:value)
    end
    def exchange_rate(curr1, curr2)
        rates = fetch_rates(curr1)
        if rates.key?(curr2)
            return rates[curr2]
        else
            raise StandardError.new unsupported_code(curr2)
        end
    end
    def fetch_rates(currency)
        request_url = "https://open.er-api.com/v6/latest/#{currency}"
        response = Rails.cache.fetch(request_url, :expires => 1.hour) do
            Net::HTTP.get_response(URI(request_url))
        end
        body = JSON.parse(response.body)
        if body['result'] == 'success'
            return body['rates']
        else
            error_message = body['error-type']
            if error_message === 'unsupported-code'
                error_message = unsupported_code(currency)
            end
            raise StandardError.new error_message
        end
    end
    def unsupported_code(code)
        return "'#{code}' is not a supported code"
    end
    def invalid_value(value)
        return "'#{value}' is not a valid input for 'value'"
    end
end
