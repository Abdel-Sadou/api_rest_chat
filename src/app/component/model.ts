export class  User{
  id ?:number;
  active ?: boolean;
  online ?: boolean;
  name ?:string;
  image ?:string;
}
export class  Conversation{
  id ?:number;
  name ?: boolean;
  createdAt ?: boolean;
  members ?:User[];
  image ?:string;
}

export class  Message{
  id ?:number;
  content ?: string;
  sender ?: User;
  conversation ?:Conversation[];
  image ?:string;
}
