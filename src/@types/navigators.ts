export type RootStackParamList = {
    "Start-Screen": {
      isUserListed?: boolean;
    };
    "Auth-Screens": NavigatorScreenParams<AuthStackSharedParamList>;
    "App-Screens": NavigatorScreenParams<DrawerStackParamsList>;
    "Timeline-Detail": {
      id: string;
    };
    "Compose-Root": {
      reTweet?: any;
    };
    "Profile-User-Root": {
      username?: string;
    };
    "Profile-Me-Root": undefined;
    "Edit-Profile": undefined;
    "Follow-List": undefined;
    "Setting-Notification-Root": undefined;
    "Edit-Community-Admin": undefined;
    "HashTag-List": undefined;
    "Registration-Personal-Info": undefined;
    "Setting-Root": undefined;
    "Timeline-Reply-Screen": {
      reply: string;
      onHandleReplyText: (value: string) => void;
    };
    "Camera-Screen": undefined;
    "Crop-File-Screen": undefined;
    "Followers-Screen": undefined;
    "Following-Root": undefined;
  };