interface AppConfig {
  port: string;
  allowOrigin: string;
  allowMethods: string;
  loginPath: string;
  loginRedirectSuccess: string;
  loginRedirectFailure: string;
  logoutPath: string;
  logoutRedirect: string;
  passCoreUrl: string;
  passCoreNamespace: string;
  passUiUrl: string;
  passUiPath: string;
}

interface PassportConfig {
  strategy: string;
  multiSaml: {
    jhu: {
      entryPoint: string;
      cert: string;
    };
    sp: {
      acsUrl: string;
      metadataUrl: string;
      identifierFormat: string;
      issuer: string;
      decryptionPvk: string;
      decryptionCert: string;
      signingCert: string;
      forceAuthn: string;
      signatureAlgorithm: string;
    };
  };
}

export interface PassAuthAppConfig {
  app: AppConfig;
  passport: PassportConfig;
}

export interface IIndexable<T = unknown> {
  [key: string]: T;
}

export interface UserShibbolethAttrs extends IIndexable<string> {
  displayName: string;
  email: string;
  eppn: string;
  givenName: string;
  surname: string;
  scopedAffiliation: string;
  employeeNumber: string;
  uniqueId: string;
  employeeIdType: string;
}

export interface PassAuthUser {
  id: string;
  shibbolethAttrs: UserShibbolethAttrs;
}
