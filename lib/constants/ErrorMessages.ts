enum ErrorMessages {
    CLASS_NAME_CONTAIN = 'The class name can only contain letters (a-z, A-Z), numbers (0-9) or underscore (_).',
    DUPLICATE_WHIRLER = 'There is a duplicate with [WhirlerName] whirler.',
    FORCED_STOP = 'The function has been forced to stop.',
    FUNCTION_NAME_CONTAIN = 'The function name can only contain letters (a-z, A-Z), numbers (0-9) or underscore (_).',
    FUNCTION_NOT_EXIST = 'The function doesn\'t exist.',
    INCORRECT_RESPONSE = 'Incorrect response format.',
    INVALID_ARGUMENTS = 'The arguments is invalid.',
    INVALID_FUNCTION = 'The function name is invalid.',
    INVALID_NAMESPACE = 'The namespace is invalid.',
    INVALID_PARAMETER = 'The parameter is invalid.',
    INVALID_REQUEST = 'The request is not properly formatted.',
    MIDDLEWARE_FUNCTION = 'Middleware must be a function.',
    NO_RESPONSE = 'No response received.',
    OVERRIDE_CLASS = 'You can\'t override the [ClassName] class.',
    OVERRIDE_FUNCTION = 'You can\'t override the [FunctionName] in any subclasses of the [ClassName] class.',
    PROVIDE_WHIRLERS = 'Please provide the Whirlers.',
    PROVIDED_WHIRLER = 'The Whirler class must be provided to create a Caller object.',
    SPECIFY_CLASS_NAME = 'Must specify a class name.',
    SPECIFY_FUNCTION_NAME = 'Must specify a function name.',
    START_CLASS_NAME = 'The class name must start with a letter.',
    START_FUNCTION_NAME = 'The function name must start with a lowercase letter.',
    SURE_WHIRLER = 'Please make sure each item is Whirler.',
    UNKNOWN = 'An unknown error has occurred.'
}

export default ErrorMessages;
