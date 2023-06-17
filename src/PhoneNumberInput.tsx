
import Input from 'react-phone-number-input/input';

interface PhoneNumberInputProps {
    phoneNumber: string;
    onPhoneNumberChange: (value?: string) => void;
}

function PhoneNumberInput({ phoneNumber, onPhoneNumberChange }: PhoneNumberInputProps) {
    const handlePhoneNumberChange = (value?: string) => {
        onPhoneNumberChange(value);
    };

    return (
        <Input
            country="US"
            placeholder="555-555-5555"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
        />
    );
}

export default PhoneNumberInput;
