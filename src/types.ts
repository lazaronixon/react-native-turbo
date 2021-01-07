export type VisitAction = 'advance' | 'replace' | 'restore';

export type TurboError =
  | 'networkFailure'
  | 'timeoutFailure'
  | 'contentTypeMismatch'
  | 'pageLoadFailure'
  | 'httpFailure'
  | 'unknownFailure';

export type Visitable = {
  url: string;
};

export type Options = {
  userAgent: string;
};

export type URL = {
  absoluteString: string;
  path: string;
};

export type VisitProposal = {
  url: URL;
  options: VisitOptions;
  properties: object;
};

export type VisitOptions = {
  action: VisitAction;
  response?: VisitOptions;
};

export type VisitResponse = {
  isSuccessful: boolean;
  statusCode: number;
  responseHTML?: string;
};

export type VisitError = {
  type: TurboError;
  localizedDescription: string;
  statusCode?: number;
};
