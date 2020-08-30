import { TextInput as Input } from 'react-native-paper';

export type InputProps = React.ComponentProps<typeof Input> & { errorText?: string };
