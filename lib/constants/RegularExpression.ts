class RegularExpression {
    public static readonly CLASS_NAME = /^[a-z][a-z0-9_]*$/i;
    public static readonly FIRST_ALPHABETIC = /^[a-z]/i;
    public static readonly FIRST_LOWERCASE = /^[a-z]/;
    public static readonly FUNCTION_NAME = /^[a-z][a-zA-Z0-9_]*$/;
    public static readonly NAMESPACE = /^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)*$/i;
}

export default RegularExpression;
