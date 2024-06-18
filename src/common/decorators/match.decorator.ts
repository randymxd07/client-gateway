import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class MatchConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = (args.object as any)[relatedPropertyName];
        return value === relatedValue;
    }

    defaultMessage(args: ValidationArguments) {
        const [relatedPropertyName] = args.constraints;
        return `${args.property} must match ${relatedPropertyName}`;
    }
}

export function Match(property: string, validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [property],
            validator: MatchConstraint,
        });
    };
}