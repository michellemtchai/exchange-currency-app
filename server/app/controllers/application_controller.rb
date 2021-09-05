class ApplicationController < ActionController::API
    rescue_from ActionController::ParameterMissing, with: :handle_error
    rescue_from StandardError, with: :handle_error

    def handle_error(exception)
      render json: { message: exception.message }, status: :bad_request
    end
end
