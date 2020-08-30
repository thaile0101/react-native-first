export type Navigation = {
    navigate: (scene: string) => void;
};

export type AuthDetails = {
    email: string;
    password: string;
    name?: string;
};

export type AuthLogin = {
    [key: string]: any;
};

export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
};

export type BottomTabParamList = {
    TabOne: undefined;
    TabTwo: undefined;
    TabThree: undefined;
};

export type TabOneParamList = {
    TabOneScreen: undefined;
};

export type TabTwoParamList = {
    TabTwoScreen: undefined;
};

export type TabThreeParamList = {
    TabThreeScreen: undefined;
};