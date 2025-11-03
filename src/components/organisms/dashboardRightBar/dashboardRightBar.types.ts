type RightBarItem = {
  icon: React.ReactElement;
  text: string;
  recievedAt?: string; // Notice the ?
};

export type RightBarContent = {
  Notifications: RightBarItem[];
  Activities: RightBarItem[];
  Contacts: RightBarItem[];
};
