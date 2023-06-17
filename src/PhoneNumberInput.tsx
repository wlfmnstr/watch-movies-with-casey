
import Input from 'react-phone-number-input/input';

interface PhoneNumberInputProps {
    inputRef: React.RefObject<HTMLInputElement>;
    phoneNumber: string;
    onPhoneNumberChange: (value?: string) => void;
}

function PhoneNumberInput({ inputRef, phoneNumber, onPhoneNumberChange }: PhoneNumberInputProps) {
    const handlePhoneNumberChange = (value?: string) => {
        onPhoneNumberChange(value);
    };

    return (
        <Input
            country="US"
            placeholder="555-555-5555"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            ref={inputRef}
        />
    );
}

export default PhoneNumberInput;
