import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'backend/1.0 (api/6.1.0)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  appGetHello(): Promise<FetchResponse<200, types.AppGetHelloResponse200>> {
    return this.core.fetch('/api/v1', 'get');
  }

  /** @throws FetchError<503, types.HealthCheckCheckResponse503> The Health Check is not successful */
  healthCheckCheck(): Promise<FetchResponse<200, types.HealthCheckCheckResponse200>> {
    return this.core.fetch('/api/v1/health-check', 'get');
  }

  /**
   * @throws FetchError<400, types.AuthAdminCreateResponse400>
   * @throws FetchError<404, types.AuthAdminCreateResponse404>
   * @throws FetchError<409, types.AuthAdminCreateResponse409>
   * @throws FetchError<500, types.AuthAdminCreateResponse500>
   */
  authAdminCreate(body: types.AuthAdminCreateBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/auth/admin', 'post', body);
  }

  /**
   * @throws FetchError<400, types.AuthAdminLoginFirstStepResponse400>
   * @throws FetchError<404, types.AuthAdminLoginFirstStepResponse404>
   * @throws FetchError<409, types.AuthAdminLoginFirstStepResponse409>
   * @throws FetchError<500, types.AuthAdminLoginFirstStepResponse500>
   */
  authAdminLoginFirstStep(
    body: types.AuthAdminLoginFirstStepBodyParam
  ): Promise<FetchResponse<201, types.AuthAdminLoginFirstStepResponse201>> {
    return this.core.fetch('/api/v1/auth/admin/login/start', 'post', body);
  }

  /**
   * @throws FetchError<400, types.AuthAdminLoginSecondStepResponse400>
   * @throws FetchError<404, types.AuthAdminLoginSecondStepResponse404>
   * @throws FetchError<409, types.AuthAdminLoginSecondStepResponse409>
   * @throws FetchError<500, types.AuthAdminLoginSecondStepResponse500>
   */
  authAdminLoginSecondStep(
    body: types.AuthAdminLoginSecondStepBodyParam
  ): Promise<FetchResponse<201, types.AuthAdminLoginSecondStepResponse201>> {
    return this.core.fetch('/api/v1/auth/admin/login/confirm', 'post', body);
  }

  /**
   * @throws FetchError<400, types.AuthAdminMeResponse400>
   * @throws FetchError<404, types.AuthAdminMeResponse404>
   * @throws FetchError<409, types.AuthAdminMeResponse409>
   * @throws FetchError<500, types.AuthAdminMeResponse500>
   */
  authAdminMe(): Promise<FetchResponse<200, types.AuthAdminMeResponse200>> {
    return this.core.fetch('/api/v1/auth/admin/me', 'get');
  }

  /**
   * @throws FetchError<400, types.InvestorAuthSignUpFirstStepResponse400>
   * @throws FetchError<500, types.InvestorAuthSignUpFirstStepResponse500>
   */
  investorAuthSignUpFirstStep(
    metadata: types.InvestorAuthSignUpFirstStepMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/auth/investors/sign-up/start/{email}', 'put', metadata);
  }

  /**
   * @throws FetchError<400, types.InvestorAuthSignUpSecondStepResponse400>
   * @throws FetchError<404, types.InvestorAuthSignUpSecondStepResponse404>
   * @throws FetchError<409, types.InvestorAuthSignUpSecondStepResponse409>
   * @throws FetchError<500, types.InvestorAuthSignUpSecondStepResponse500>
   */
  investorAuthSignUpSecondStep(
    body: types.InvestorAuthSignUpSecondStepBodyParam
  ): Promise<FetchResponse<201, types.InvestorAuthSignUpSecondStepResponse201>> {
    return this.core.fetch('/api/v1/auth/investors/sign-up/confirm', 'post', body);
  }

  /**
   * @throws FetchError<400, types.InvestorAuthSignInResponse400>
   * @throws FetchError<404, types.InvestorAuthSignInResponse404>
   * @throws FetchError<409, types.InvestorAuthSignInResponse409>
   * @throws FetchError<500, types.InvestorAuthSignInResponse500>
   */
  investorAuthSignIn(
    body: types.InvestorAuthSignInBodyParam
  ): Promise<FetchResponse<201, types.InvestorAuthSignInResponse201>> {
    return this.core.fetch('/api/v1/auth/investors/sign-in', 'post', body);
  }

  /**
   * @throws FetchError<400, types.InvestorAuthRetrieveAccountResponse400>
   * @throws FetchError<404, types.InvestorAuthRetrieveAccountResponse404>
   * @throws FetchError<409, types.InvestorAuthRetrieveAccountResponse409>
   * @throws FetchError<500, types.InvestorAuthRetrieveAccountResponse500>
   */
  investorAuthRetrieveAccount(
    metadata: types.InvestorAuthRetrieveAccountMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/auth/investors/retrieve/start/{email}', 'put', metadata);
  }

  /**
   * @throws FetchError<400, types.InvestorAuthConfirmRetrieveResponse400>
   * @throws FetchError<404, types.InvestorAuthConfirmRetrieveResponse404>
   * @throws FetchError<409, types.InvestorAuthConfirmRetrieveResponse409>
   * @throws FetchError<500, types.InvestorAuthConfirmRetrieveResponse500>
   */
  investorAuthConfirmRetrieve(
    body: types.InvestorAuthConfirmRetrieveBodyParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/auth/investors/retrieve/confirm', 'put', body);
  }

  /**
   * @throws FetchError<400, types.InvestorAuthGetMeResponse400>
   * @throws FetchError<404, types.InvestorAuthGetMeResponse404>
   * @throws FetchError<409, types.InvestorAuthGetMeResponse409>
   * @throws FetchError<500, types.InvestorAuthGetMeResponse500>
   */
  investorAuthGetMe(): Promise<FetchResponse<200, types.InvestorAuthGetMeResponse200>> {
    return this.core.fetch('/api/v1/auth/investors/me', 'get');
  }

  /**
   * @throws FetchError<400, types.InvestorUpdateResponse400>
   * @throws FetchError<404, types.InvestorUpdateResponse404>
   * @throws FetchError<409, types.InvestorUpdateResponse409>
   * @throws FetchError<500, types.InvestorUpdateResponse500>
   */
  investorUpdate(
    body: types.InvestorUpdateBodyParam
  ): Promise<FetchResponse<200, types.InvestorUpdateResponse200>> {
    return this.core.fetch('/api/v1/investors', 'patch', body);
  }

  /**
   * @throws FetchError<400, types.AdminInvestorListResponse400>
   * @throws FetchError<404, types.AdminInvestorListResponse404>
   * @throws FetchError<409, types.AdminInvestorListResponse409>
   * @throws FetchError<500, types.AdminInvestorListResponse500>
   */
  adminInvestorList(
    metadata: types.AdminInvestorListMetadataParam
  ): Promise<FetchResponse<200, types.AdminInvestorListResponse200>> {
    return this.core.fetch('/api/v1/admin/investors', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.AdminInvestorFindOneResponse400>
   * @throws FetchError<404, types.AdminInvestorFindOneResponse404>
   * @throws FetchError<409, types.AdminInvestorFindOneResponse409>
   * @throws FetchError<500, types.AdminInvestorFindOneResponse500>
   */
  adminInvestorFindOne(
    metadata: types.AdminInvestorFindOneMetadataParam
  ): Promise<FetchResponse<200, types.AdminInvestorFindOneResponse200>> {
    return this.core.fetch('/api/v1/admin/investors/{investorId}', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.AdminInvestorUpdateResponse400>
   * @throws FetchError<404, types.AdminInvestorUpdateResponse404>
   * @throws FetchError<409, types.AdminInvestorUpdateResponse409>
   * @throws FetchError<500, types.AdminInvestorUpdateResponse500>
   */
  adminInvestorUpdate(
    body: types.AdminInvestorUpdateBodyParam,
    metadata: types.AdminInvestorUpdateMetadataParam
  ): Promise<FetchResponse<200, types.AdminInvestorUpdateResponse200>> {
    return this.core.fetch('/api/v1/admin/investors/{investorId}', 'patch', body, metadata);
  }

  /**
   * @throws FetchError<400, types.FileUploadImageResponse400>
   * @throws FetchError<404, types.FileUploadImageResponse404>
   * @throws FetchError<409, types.FileUploadImageResponse409>
   * @throws FetchError<500, types.FileUploadImageResponse500>
   */
  fileUploadImage(
    metadata: types.FileUploadImageMetadataParam
  ): Promise<FetchResponse<number, types.FileUploadImageResponseDefault>> {
    return this.core.fetch('/api/v1/files/upload/{rootFolder}', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.FileDownloadResizeResponse400>
   * @throws FetchError<404, types.FileDownloadResizeResponse404>
   * @throws FetchError<409, types.FileDownloadResizeResponse409>
   * @throws FetchError<500, types.FileDownloadResizeResponse500>
   */
  fileDownloadResize(
    metadata: types.FileDownloadResizeMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/files/download/resize', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.FileDownloadResponse400>
   * @throws FetchError<404, types.FileDownloadResponse404>
   * @throws FetchError<409, types.FileDownloadResponse409>
   * @throws FetchError<500, types.FileDownloadResponse500>
   */
  fileDownload(metadata: types.FileDownloadMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/files/download', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.IndividualInvestorUpdateResponse400>
   * @throws FetchError<404, types.IndividualInvestorUpdateResponse404>
   * @throws FetchError<409, types.IndividualInvestorUpdateResponse409>
   * @throws FetchError<500, types.IndividualInvestorUpdateResponse500>
   */
  individualInvestorUpdate(
    body: types.IndividualInvestorUpdateBodyParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/investors/individual', 'put', body);
  }

  /**
   * @throws FetchError<400, types.AdminIndividualInvestorChangeSiDocumentStatusResponse400>
   * @throws FetchError<404, types.AdminIndividualInvestorChangeSiDocumentStatusResponse404>
   * @throws FetchError<409, types.AdminIndividualInvestorChangeSiDocumentStatusResponse409>
   * @throws FetchError<500, types.AdminIndividualInvestorChangeSiDocumentStatusResponse500>
   */
  adminIndividualInvestorChangeSiDocumentStatus(
    body: types.AdminIndividualInvestorChangeSiDocumentStatusBodyParam,
    metadata: types.AdminIndividualInvestorChangeSiDocumentStatusMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/api/v1/admin/investors/individual/{investorId}',
      'patch',
      body,
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.AdminIndividualInvestorAskForDocumentsResponse400>
   * @throws FetchError<404, types.AdminIndividualInvestorAskForDocumentsResponse404>
   * @throws FetchError<409, types.AdminIndividualInvestorAskForDocumentsResponse409>
   * @throws FetchError<500, types.AdminIndividualInvestorAskForDocumentsResponse500>
   */
  adminIndividualInvestorAskForDocuments(
    body: types.AdminIndividualInvestorAskForDocumentsBodyParam,
    metadata: types.AdminIndividualInvestorAskForDocumentsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/api/v1/admin/investors/individual/{investorId}/ask-for-documents',
      'put',
      body,
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.BrokerInvestorUpdateResponse400>
   * @throws FetchError<404, types.BrokerInvestorUpdateResponse404>
   * @throws FetchError<409, types.BrokerInvestorUpdateResponse409>
   * @throws FetchError<500, types.BrokerInvestorUpdateResponse500>
   */
  brokerInvestorUpdate(
    body: types.BrokerInvestorUpdateBodyParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/investors/broker', 'put', body);
  }

  /**
   * @throws FetchError<400, types.AdminBrokerInvestorUpdateAfslFormStatusResponse400>
   * @throws FetchError<404, types.AdminBrokerInvestorUpdateAfslFormStatusResponse404>
   * @throws FetchError<409, types.AdminBrokerInvestorUpdateAfslFormStatusResponse409>
   * @throws FetchError<500, types.AdminBrokerInvestorUpdateAfslFormStatusResponse500>
   */
  adminBrokerInvestorUpdateAfslFormStatus(
    body: types.AdminBrokerInvestorUpdateAfslFormStatusBodyParam,
    metadata: types.AdminBrokerInvestorUpdateAfslFormStatusMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/admin/investors/broker/{investorId}', 'patch', body, metadata);
  }

  /**
   * @throws FetchError<400, types.AdminBrokerInvestorAskForDocumentsResponse400>
   * @throws FetchError<404, types.AdminBrokerInvestorAskForDocumentsResponse404>
   * @throws FetchError<409, types.AdminBrokerInvestorAskForDocumentsResponse409>
   * @throws FetchError<500, types.AdminBrokerInvestorAskForDocumentsResponse500>
   */
  adminBrokerInvestorAskForDocuments(
    body: types.AdminBrokerInvestorAskForDocumentsBodyParam,
    metadata: types.AdminBrokerInvestorAskForDocumentsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/api/v1/admin/investors/broker/{investorId}/ask-for-documents',
      'put',
      body,
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.InvestorEntityCreateResponse400>
   * @throws FetchError<404, types.InvestorEntityCreateResponse404>
   * @throws FetchError<409, types.InvestorEntityCreateResponse409>
   * @throws FetchError<500, types.InvestorEntityCreateResponse500>
   */
  investorEntityCreate(
    body: types.InvestorEntityCreateBodyParam,
    metadata: types.InvestorEntityCreateMetadataParam
  ): Promise<FetchResponse<201, types.InvestorEntityCreateResponse201>> {
    return this.core.fetch('/api/v1/investors/{investorId}/entities', 'post', body, metadata);
  }

  /**
   * @throws FetchError<400, types.InvestorEntityUpdateResponse400>
   * @throws FetchError<404, types.InvestorEntityUpdateResponse404>
   * @throws FetchError<409, types.InvestorEntityUpdateResponse409>
   * @throws FetchError<500, types.InvestorEntityUpdateResponse500>
   */
  investorEntityUpdate(
    body: types.InvestorEntityUpdateBodyParam,
    metadata: types.InvestorEntityUpdateMetadataParam
  ): Promise<FetchResponse<200, types.InvestorEntityUpdateResponse200>> {
    return this.core.fetch(
      '/api/v1/investors/{investorId}/entities/{entityId}',
      'patch',
      body,
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.AdminInvestorEntityCreateResponse400>
   * @throws FetchError<404, types.AdminInvestorEntityCreateResponse404>
   * @throws FetchError<409, types.AdminInvestorEntityCreateResponse409>
   * @throws FetchError<500, types.AdminInvestorEntityCreateResponse500>
   */
  adminInvestorEntityCreate(
    body: types.AdminInvestorEntityCreateBodyParam,
    metadata: types.AdminInvestorEntityCreateMetadataParam
  ): Promise<FetchResponse<201, types.AdminInvestorEntityCreateResponse201>> {
    return this.core.fetch('/api/v1/admin/investors/{investorId}/entities', 'post', body, metadata);
  }

  /**
   * @throws FetchError<400, types.AdminInvestorEntityUpdateResponse400>
   * @throws FetchError<404, types.AdminInvestorEntityUpdateResponse404>
   * @throws FetchError<409, types.AdminInvestorEntityUpdateResponse409>
   * @throws FetchError<500, types.AdminInvestorEntityUpdateResponse500>
   */
  adminInvestorEntityUpdate(
    body: types.AdminInvestorEntityUpdateBodyParam,
    metadata: types.AdminInvestorEntityUpdateMetadataParam
  ): Promise<FetchResponse<200, types.AdminInvestorEntityUpdateResponse200>> {
    return this.core.fetch(
      '/api/v1/admin/investors/{investorId}/entities/{entityId}',
      'patch',
      body,
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.AdminCompanyCreateResponse400>
   * @throws FetchError<404, types.AdminCompanyCreateResponse404>
   * @throws FetchError<409, types.AdminCompanyCreateResponse409>
   * @throws FetchError<500, types.AdminCompanyCreateResponse500>
   */
  adminCompanyCreate(
    body: types.AdminCompanyCreateBodyParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/admin/companies', 'post', body);
  }

  /**
   * @throws FetchError<400, types.AdminCompanyListResponse400>
   * @throws FetchError<404, types.AdminCompanyListResponse404>
   * @throws FetchError<409, types.AdminCompanyListResponse409>
   * @throws FetchError<500, types.AdminCompanyListResponse500>
   */
  adminCompanyList(
    metadata: types.AdminCompanyListMetadataParam
  ): Promise<FetchResponse<200, types.AdminCompanyListResponse200>> {
    return this.core.fetch('/api/v1/admin/companies', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.AdminCompanyUpdateResponse400>
   * @throws FetchError<404, types.AdminCompanyUpdateResponse404>
   * @throws FetchError<409, types.AdminCompanyUpdateResponse409>
   * @throws FetchError<500, types.AdminCompanyUpdateResponse500>
   */
  adminCompanyUpdate(
    body: types.AdminCompanyUpdateBodyParam,
    metadata: types.AdminCompanyUpdateMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/admin/companies/{companyId}', 'patch', body, metadata);
  }

  /**
   * @throws FetchError<400, types.AdminCompanyGetByIdResponse400>
   * @throws FetchError<404, types.AdminCompanyGetByIdResponse404>
   * @throws FetchError<409, types.AdminCompanyGetByIdResponse409>
   * @throws FetchError<500, types.AdminCompanyGetByIdResponse500>
   */
  adminCompanyGetById(
    metadata: types.AdminCompanyGetByIdMetadataParam
  ): Promise<FetchResponse<200, types.AdminCompanyGetByIdResponse200>> {
    return this.core.fetch('/api/v1/admin/companies/{companyId}', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.AdminInvestorGroupCreateResponse400>
   * @throws FetchError<404, types.AdminInvestorGroupCreateResponse404>
   * @throws FetchError<409, types.AdminInvestorGroupCreateResponse409>
   * @throws FetchError<500, types.AdminInvestorGroupCreateResponse500>
   */
  adminInvestorGroupCreate(
    body: types.AdminInvestorGroupCreateBodyParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/admin/investor-groups', 'post', body);
  }

  /**
   * @throws FetchError<400, types.AdminInvestorGroupListResponse400>
   * @throws FetchError<404, types.AdminInvestorGroupListResponse404>
   * @throws FetchError<409, types.AdminInvestorGroupListResponse409>
   * @throws FetchError<500, types.AdminInvestorGroupListResponse500>
   */
  adminInvestorGroupList(
    metadata: types.AdminInvestorGroupListMetadataParam
  ): Promise<FetchResponse<200, types.AdminInvestorGroupListResponse200>> {
    return this.core.fetch('/api/v1/admin/investor-groups', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.AdminInvestorGroupAddInvestorResponse400>
   * @throws FetchError<404, types.AdminInvestorGroupAddInvestorResponse404>
   * @throws FetchError<409, types.AdminInvestorGroupAddInvestorResponse409>
   * @throws FetchError<500, types.AdminInvestorGroupAddInvestorResponse500>
   */
  adminInvestorGroupAddInvestor(
    metadata: types.AdminInvestorGroupAddInvestorMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/api/v1/admin/investor-groups/{investorGroupId}/investors/{investorId}',
      'post',
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.AdminInvestorGroupRemoveInvestorResponse400>
   * @throws FetchError<404, types.AdminInvestorGroupRemoveInvestorResponse404>
   * @throws FetchError<409, types.AdminInvestorGroupRemoveInvestorResponse409>
   * @throws FetchError<500, types.AdminInvestorGroupRemoveInvestorResponse500>
   */
  adminInvestorGroupRemoveInvestor(
    metadata: types.AdminInvestorGroupRemoveInvestorMetadataParam
  ): Promise<FetchResponse<200, types.AdminInvestorGroupRemoveInvestorResponse200>> {
    return this.core.fetch(
      '/api/v1/admin/investor-groups/{investorGroupId}/investors/{investorId}',
      'delete',
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.AdminInvestorGroupUpdateResponse400>
   * @throws FetchError<404, types.AdminInvestorGroupUpdateResponse404>
   * @throws FetchError<409, types.AdminInvestorGroupUpdateResponse409>
   * @throws FetchError<500, types.AdminInvestorGroupUpdateResponse500>
   */
  adminInvestorGroupUpdate(
    body: types.AdminInvestorGroupUpdateBodyParam,
    metadata: types.AdminInvestorGroupUpdateMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/api/v1/admin/investor-groups/{investorGroupId}',
      'patch',
      body,
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.AdminInvestorGroupDeleteResponse400>
   * @throws FetchError<404, types.AdminInvestorGroupDeleteResponse404>
   * @throws FetchError<409, types.AdminInvestorGroupDeleteResponse409>
   * @throws FetchError<500, types.AdminInvestorGroupDeleteResponse500>
   */
  adminInvestorGroupDelete(
    metadata: types.AdminInvestorGroupDeleteMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/api/v1/admin/investor-groups/{investorGroupId}', 'delete', metadata);
  }

  /**
   * @throws FetchError<400, types.AdminInvestorGroupGetResponse400>
   * @throws FetchError<404, types.AdminInvestorGroupGetResponse404>
   * @throws FetchError<409, types.AdminInvestorGroupGetResponse409>
   * @throws FetchError<500, types.AdminInvestorGroupGetResponse500>
   */
  adminInvestorGroupGet(
    metadata: types.AdminInvestorGroupGetMetadataParam
  ): Promise<FetchResponse<200, types.AdminInvestorGroupGetResponse200>> {
    return this.core.fetch('/api/v1/admin/investor-groups/{investorGroupId}', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.AdminDealCreateResponse400>
   * @throws FetchError<404, types.AdminDealCreateResponse404>
   * @throws FetchError<409, types.AdminDealCreateResponse409>
   * @throws FetchError<500, types.AdminDealCreateResponse500>
   */
  adminDealCreate(
    body: types.AdminDealCreateBodyParam
  ): Promise<FetchResponse<201, types.AdminDealCreateResponse201>> {
    return this.core.fetch('/api/v1/admin/deals', 'post', body);
  }

  /**
   * @throws FetchError<400, types.AdminDealListResponse400>
   * @throws FetchError<404, types.AdminDealListResponse404>
   * @throws FetchError<409, types.AdminDealListResponse409>
   * @throws FetchError<500, types.AdminDealListResponse500>
   */
  adminDealList(
    metadata: types.AdminDealListMetadataParam
  ): Promise<FetchResponse<200, types.AdminDealListResponse200>> {
    return this.core.fetch('/api/v1/admin/deals', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.AdminDealUpdateResponse400>
   * @throws FetchError<404, types.AdminDealUpdateResponse404>
   * @throws FetchError<409, types.AdminDealUpdateResponse409>
   * @throws FetchError<500, types.AdminDealUpdateResponse500>
   */
  adminDealUpdate(
    body: types.AdminDealUpdateBodyParam,
    metadata: types.AdminDealUpdateMetadataParam
  ): Promise<FetchResponse<200, types.AdminDealUpdateResponse200>> {
    return this.core.fetch('/api/v1/admin/deals/{dealId}', 'patch', body, metadata);
  }

  /**
   * @throws FetchError<400, types.AdminDealGetByIdResponse400>
   * @throws FetchError<404, types.AdminDealGetByIdResponse404>
   * @throws FetchError<409, types.AdminDealGetByIdResponse409>
   * @throws FetchError<500, types.AdminDealGetByIdResponse500>
   */
  adminDealGetById(
    metadata: types.AdminDealGetByIdMetadataParam
  ): Promise<FetchResponse<200, types.AdminDealGetByIdResponse200>> {
    return this.core.fetch('/api/v1/admin/deals/{dealId}', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.AdminDealCloseBidsResponse400>
   * @throws FetchError<404, types.AdminDealCloseBidsResponse404>
   * @throws FetchError<409, types.AdminDealCloseBidsResponse409>
   * @throws FetchError<500, types.AdminDealCloseBidsResponse500>
   */
  adminDealCloseBids(
    metadata: types.AdminDealCloseBidsMetadataParam
  ): Promise<FetchResponse<200, types.AdminDealCloseBidsResponse200>> {
    return this.core.fetch('/api/v1/admin/deals/{dealId}/close/bids', 'put', metadata);
  }

  /**
   * @throws FetchError<400, types.InvestorDealListResponse400>
   * @throws FetchError<404, types.InvestorDealListResponse404>
   * @throws FetchError<409, types.InvestorDealListResponse409>
   * @throws FetchError<500, types.InvestorDealListResponse500>
   */
  investorDealList(
    body: types.InvestorDealListBodyParam,
    metadata: types.InvestorDealListMetadataParam
  ): Promise<FetchResponse<201, types.InvestorDealListResponse201>> {
    return this.core.fetch('/api/v1/investors/{investorId}/deals', 'post', body, metadata);
  }

  /**
   * @throws FetchError<400, types.InvestorDealFindResponse400>
   * @throws FetchError<404, types.InvestorDealFindResponse404>
   * @throws FetchError<409, types.InvestorDealFindResponse409>
   * @throws FetchError<500, types.InvestorDealFindResponse500>
   */
  investorDealFind(
    metadata: types.InvestorDealFindMetadataParam
  ): Promise<FetchResponse<200, types.InvestorDealFindResponse200>> {
    return this.core.fetch('/api/v1/investors/{investorId}/deals/{dealId}', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.InvestorDealSubmitInterestResponse400>
   * @throws FetchError<404, types.InvestorDealSubmitInterestResponse404>
   * @throws FetchError<409, types.InvestorDealSubmitInterestResponse409>
   * @throws FetchError<500, types.InvestorDealSubmitInterestResponse500>
   */
  investorDealSubmitInterest(
    metadata: types.InvestorDealSubmitInterestMetadataParam
  ): Promise<FetchResponse<200, types.InvestorDealSubmitInterestResponse200>> {
    return this.core.fetch(
      '/api/v1/investors/{investorId}/deals/{dealId}/submit-interest',
      'put',
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.AdminDealLogListResponse400>
   * @throws FetchError<404, types.AdminDealLogListResponse404>
   * @throws FetchError<409, types.AdminDealLogListResponse409>
   * @throws FetchError<500, types.AdminDealLogListResponse500>
   */
  adminDealLogList(
    metadata: types.AdminDealLogListMetadataParam
  ): Promise<FetchResponse<200, types.AdminDealLogListResponse200>> {
    return this.core.fetch('/api/v1/admin/deals/{dealId}/logs', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.BidCreateResponse400>
   * @throws FetchError<404, types.BidCreateResponse404>
   * @throws FetchError<409, types.BidCreateResponse409>
   * @throws FetchError<500, types.BidCreateResponse500>
   */
  bidCreate(
    body: types.BidCreateBodyParam,
    metadata: types.BidCreateMetadataParam
  ): Promise<FetchResponse<201, types.BidCreateResponse201>> {
    return this.core.fetch(
      '/api/v1/investors/{investorId}/deals/{dealId}/bids',
      'post',
      body,
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.BidAdminCreateResponse400>
   * @throws FetchError<404, types.BidAdminCreateResponse404>
   * @throws FetchError<409, types.BidAdminCreateResponse409>
   * @throws FetchError<500, types.BidAdminCreateResponse500>
   */
  bidAdminCreate(
    body: types.BidAdminCreateBodyParam,
    metadata: types.BidAdminCreateMetadataParam
  ): Promise<FetchResponse<201, types.BidAdminCreateResponse201>> {
    return this.core.fetch(
      '/api/v1/admin/investors/{investorId}/deals/{dealId}/bids',
      'post',
      body,
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.BidAdminUpdateResponse400>
   * @throws FetchError<404, types.BidAdminUpdateResponse404>
   * @throws FetchError<409, types.BidAdminUpdateResponse409>
   * @throws FetchError<500, types.BidAdminUpdateResponse500>
   */
  bidAdminUpdate(
    body: types.BidAdminUpdateBodyParam,
    metadata: types.BidAdminUpdateMetadataParam
  ): Promise<FetchResponse<200, types.BidAdminUpdateResponse200>> {
    return this.core.fetch(
      '/api/v1/admin/investors/{investorId}/deals/{dealId}/bids/{bidId}',
      'put',
      body,
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.BidAdminDeleteResponse400>
   * @throws FetchError<404, types.BidAdminDeleteResponse404>
   * @throws FetchError<409, types.BidAdminDeleteResponse409>
   * @throws FetchError<500, types.BidAdminDeleteResponse500>
   */
  bidAdminDelete(
    metadata: types.BidAdminDeleteMetadataParam
  ): Promise<FetchResponse<200, types.BidAdminDeleteResponse200>> {
    return this.core.fetch(
      '/api/v1/admin/investors/{investorId}/deals/{dealId}/bids/{bidId}',
      'delete',
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.InvestorInboxListResponse400>
   * @throws FetchError<404, types.InvestorInboxListResponse404>
   * @throws FetchError<409, types.InvestorInboxListResponse409>
   * @throws FetchError<500, types.InvestorInboxListResponse500>
   */
  investorInboxList(
    metadata: types.InvestorInboxListMetadataParam
  ): Promise<FetchResponse<200, types.InvestorInboxListResponse200>> {
    return this.core.fetch('/api/v1/investors/{investorId}/inboxes/deals', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.InvestorInboxAcceptTermsResponse400>
   * @throws FetchError<404, types.InvestorInboxAcceptTermsResponse404>
   * @throws FetchError<409, types.InvestorInboxAcceptTermsResponse409>
   * @throws FetchError<500, types.InvestorInboxAcceptTermsResponse500>
   */
  investorInboxAcceptTerms(
    metadata: types.InvestorInboxAcceptTermsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      '/api/v1/investors/{investorId}/inboxes/deals/{dealId}/accept',
      'put',
      metadata
    );
  }

  /**
   * @throws FetchError<400, types.DealAllocationFindOneResponse400>
   * @throws FetchError<404, types.DealAllocationFindOneResponse404>
   * @throws FetchError<409, types.DealAllocationFindOneResponse409>
   * @throws FetchError<500, types.DealAllocationFindOneResponse500>
   */
  dealAllocationFindOne(
    metadata: types.DealAllocationFindOneMetadataParam
  ): Promise<FetchResponse<200, types.DealAllocationFindOneResponse200>> {
    return this.core.fetch('/api/v1/deals/{dealId}/allocation', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.DealAllocationCreateResponse400>
   * @throws FetchError<404, types.DealAllocationCreateResponse404>
   * @throws FetchError<409, types.DealAllocationCreateResponse409>
   * @throws FetchError<500, types.DealAllocationCreateResponse500>
   */
  dealAllocationCreate(
    body: types.DealAllocationCreateBodyParam,
    metadata: types.DealAllocationCreateMetadataParam
  ): Promise<FetchResponse<200, types.DealAllocationCreateResponse200>> {
    return this.core.fetch('/api/v1/deals/{dealId}/allocation', 'put', body, metadata);
  }
}

const createSDK = (() => {
  return new SDK();
})();
export default createSDK;

export type {
  AdminBrokerInvestorAskForDocumentsBodyParam,
  AdminBrokerInvestorAskForDocumentsMetadataParam,
  AdminBrokerInvestorAskForDocumentsResponse400,
  AdminBrokerInvestorAskForDocumentsResponse404,
  AdminBrokerInvestorAskForDocumentsResponse409,
  AdminBrokerInvestorAskForDocumentsResponse500,
  AdminBrokerInvestorUpdateAfslFormStatusBodyParam,
  AdminBrokerInvestorUpdateAfslFormStatusMetadataParam,
  AdminBrokerInvestorUpdateAfslFormStatusResponse400,
  AdminBrokerInvestorUpdateAfslFormStatusResponse404,
  AdminBrokerInvestorUpdateAfslFormStatusResponse409,
  AdminBrokerInvestorUpdateAfslFormStatusResponse500,
  AdminCompanyCreateBodyParam,
  AdminCompanyCreateResponse400,
  AdminCompanyCreateResponse404,
  AdminCompanyCreateResponse409,
  AdminCompanyCreateResponse500,
  AdminCompanyGetByIdMetadataParam,
  AdminCompanyGetByIdResponse200,
  AdminCompanyGetByIdResponse400,
  AdminCompanyGetByIdResponse404,
  AdminCompanyGetByIdResponse409,
  AdminCompanyGetByIdResponse500,
  AdminCompanyListMetadataParam,
  AdminCompanyListResponse200,
  AdminCompanyListResponse400,
  AdminCompanyListResponse404,
  AdminCompanyListResponse409,
  AdminCompanyListResponse500,
  AdminCompanyUpdateBodyParam,
  AdminCompanyUpdateMetadataParam,
  AdminCompanyUpdateResponse400,
  AdminCompanyUpdateResponse404,
  AdminCompanyUpdateResponse409,
  AdminCompanyUpdateResponse500,
  AdminDealCloseBidsMetadataParam,
  AdminDealCloseBidsResponse200,
  AdminDealCloseBidsResponse400,
  AdminDealCloseBidsResponse404,
  AdminDealCloseBidsResponse409,
  AdminDealCloseBidsResponse500,
  AdminDealCreateBodyParam,
  AdminDealCreateResponse201,
  AdminDealCreateResponse400,
  AdminDealCreateResponse404,
  AdminDealCreateResponse409,
  AdminDealCreateResponse500,
  AdminDealGetByIdMetadataParam,
  AdminDealGetByIdResponse200,
  AdminDealGetByIdResponse400,
  AdminDealGetByIdResponse404,
  AdminDealGetByIdResponse409,
  AdminDealGetByIdResponse500,
  AdminDealListMetadataParam,
  AdminDealListResponse200,
  AdminDealListResponse400,
  AdminDealListResponse404,
  AdminDealListResponse409,
  AdminDealListResponse500,
  AdminDealLogListMetadataParam,
  AdminDealLogListResponse200,
  AdminDealLogListResponse400,
  AdminDealLogListResponse404,
  AdminDealLogListResponse409,
  AdminDealLogListResponse500,
  AdminDealUpdateBodyParam,
  AdminDealUpdateMetadataParam,
  AdminDealUpdateResponse200,
  AdminDealUpdateResponse400,
  AdminDealUpdateResponse404,
  AdminDealUpdateResponse409,
  AdminDealUpdateResponse500,
  AdminIndividualInvestorAskForDocumentsBodyParam,
  AdminIndividualInvestorAskForDocumentsMetadataParam,
  AdminIndividualInvestorAskForDocumentsResponse400,
  AdminIndividualInvestorAskForDocumentsResponse404,
  AdminIndividualInvestorAskForDocumentsResponse409,
  AdminIndividualInvestorAskForDocumentsResponse500,
  AdminIndividualInvestorChangeSiDocumentStatusBodyParam,
  AdminIndividualInvestorChangeSiDocumentStatusMetadataParam,
  AdminIndividualInvestorChangeSiDocumentStatusResponse400,
  AdminIndividualInvestorChangeSiDocumentStatusResponse404,
  AdminIndividualInvestorChangeSiDocumentStatusResponse409,
  AdminIndividualInvestorChangeSiDocumentStatusResponse500,
  AdminInvestorEntityCreateBodyParam,
  AdminInvestorEntityCreateMetadataParam,
  AdminInvestorEntityCreateResponse201,
  AdminInvestorEntityCreateResponse400,
  AdminInvestorEntityCreateResponse404,
  AdminInvestorEntityCreateResponse409,
  AdminInvestorEntityCreateResponse500,
  AdminInvestorEntityUpdateBodyParam,
  AdminInvestorEntityUpdateMetadataParam,
  AdminInvestorEntityUpdateResponse200,
  AdminInvestorEntityUpdateResponse400,
  AdminInvestorEntityUpdateResponse404,
  AdminInvestorEntityUpdateResponse409,
  AdminInvestorEntityUpdateResponse500,
  AdminInvestorFindOneMetadataParam,
  AdminInvestorFindOneResponse200,
  AdminInvestorFindOneResponse400,
  AdminInvestorFindOneResponse404,
  AdminInvestorFindOneResponse409,
  AdminInvestorFindOneResponse500,
  AdminInvestorGroupAddInvestorMetadataParam,
  AdminInvestorGroupAddInvestorResponse400,
  AdminInvestorGroupAddInvestorResponse404,
  AdminInvestorGroupAddInvestorResponse409,
  AdminInvestorGroupAddInvestorResponse500,
  AdminInvestorGroupCreateBodyParam,
  AdminInvestorGroupCreateResponse400,
  AdminInvestorGroupCreateResponse404,
  AdminInvestorGroupCreateResponse409,
  AdminInvestorGroupCreateResponse500,
  AdminInvestorGroupDeleteMetadataParam,
  AdminInvestorGroupDeleteResponse400,
  AdminInvestorGroupDeleteResponse404,
  AdminInvestorGroupDeleteResponse409,
  AdminInvestorGroupDeleteResponse500,
  AdminInvestorGroupGetMetadataParam,
  AdminInvestorGroupGetResponse200,
  AdminInvestorGroupGetResponse400,
  AdminInvestorGroupGetResponse404,
  AdminInvestorGroupGetResponse409,
  AdminInvestorGroupGetResponse500,
  AdminInvestorGroupListMetadataParam,
  AdminInvestorGroupListResponse200,
  AdminInvestorGroupListResponse400,
  AdminInvestorGroupListResponse404,
  AdminInvestorGroupListResponse409,
  AdminInvestorGroupListResponse500,
  AdminInvestorGroupRemoveInvestorMetadataParam,
  AdminInvestorGroupRemoveInvestorResponse200,
  AdminInvestorGroupRemoveInvestorResponse400,
  AdminInvestorGroupRemoveInvestorResponse404,
  AdminInvestorGroupRemoveInvestorResponse409,
  AdminInvestorGroupRemoveInvestorResponse500,
  AdminInvestorGroupUpdateBodyParam,
  AdminInvestorGroupUpdateMetadataParam,
  AdminInvestorGroupUpdateResponse400,
  AdminInvestorGroupUpdateResponse404,
  AdminInvestorGroupUpdateResponse409,
  AdminInvestorGroupUpdateResponse500,
  AdminInvestorListMetadataParam,
  AdminInvestorListResponse200,
  AdminInvestorListResponse400,
  AdminInvestorListResponse404,
  AdminInvestorListResponse409,
  AdminInvestorListResponse500,
  AdminInvestorUpdateBodyParam,
  AdminInvestorUpdateMetadataParam,
  AdminInvestorUpdateResponse200,
  AdminInvestorUpdateResponse400,
  AdminInvestorUpdateResponse404,
  AdminInvestorUpdateResponse409,
  AdminInvestorUpdateResponse500,
  AppGetHelloResponse200,
  AuthAdminCreateBodyParam,
  AuthAdminCreateResponse400,
  AuthAdminCreateResponse404,
  AuthAdminCreateResponse409,
  AuthAdminCreateResponse500,
  AuthAdminLoginFirstStepBodyParam,
  AuthAdminLoginFirstStepResponse201,
  AuthAdminLoginFirstStepResponse400,
  AuthAdminLoginFirstStepResponse404,
  AuthAdminLoginFirstStepResponse409,
  AuthAdminLoginFirstStepResponse500,
  AuthAdminLoginSecondStepBodyParam,
  AuthAdminLoginSecondStepResponse201,
  AuthAdminLoginSecondStepResponse400,
  AuthAdminLoginSecondStepResponse404,
  AuthAdminLoginSecondStepResponse409,
  AuthAdminLoginSecondStepResponse500,
  AuthAdminMeResponse200,
  AuthAdminMeResponse400,
  AuthAdminMeResponse404,
  AuthAdminMeResponse409,
  AuthAdminMeResponse500,
  BidAdminCreateBodyParam,
  BidAdminCreateMetadataParam,
  BidAdminCreateResponse201,
  BidAdminCreateResponse400,
  BidAdminCreateResponse404,
  BidAdminCreateResponse409,
  BidAdminCreateResponse500,
  BidAdminDeleteMetadataParam,
  BidAdminDeleteResponse200,
  BidAdminDeleteResponse400,
  BidAdminDeleteResponse404,
  BidAdminDeleteResponse409,
  BidAdminDeleteResponse500,
  BidAdminUpdateBodyParam,
  BidAdminUpdateMetadataParam,
  BidAdminUpdateResponse200,
  BidAdminUpdateResponse400,
  BidAdminUpdateResponse404,
  BidAdminUpdateResponse409,
  BidAdminUpdateResponse500,
  BidCreateBodyParam,
  BidCreateMetadataParam,
  BidCreateResponse201,
  BidCreateResponse400,
  BidCreateResponse404,
  BidCreateResponse409,
  BidCreateResponse500,
  BrokerInvestorUpdateBodyParam,
  BrokerInvestorUpdateResponse400,
  BrokerInvestorUpdateResponse404,
  BrokerInvestorUpdateResponse409,
  BrokerInvestorUpdateResponse500,
  DealAllocationCreateBodyParam,
  DealAllocationCreateMetadataParam,
  DealAllocationCreateResponse200,
  DealAllocationCreateResponse400,
  DealAllocationCreateResponse404,
  DealAllocationCreateResponse409,
  DealAllocationCreateResponse500,
  DealAllocationFindOneMetadataParam,
  DealAllocationFindOneResponse200,
  DealAllocationFindOneResponse400,
  DealAllocationFindOneResponse404,
  DealAllocationFindOneResponse409,
  DealAllocationFindOneResponse500,
  FileDownloadMetadataParam,
  FileDownloadResizeMetadataParam,
  FileDownloadResizeResponse400,
  FileDownloadResizeResponse404,
  FileDownloadResizeResponse409,
  FileDownloadResizeResponse500,
  FileDownloadResponse400,
  FileDownloadResponse404,
  FileDownloadResponse409,
  FileDownloadResponse500,
  FileUploadImageMetadataParam,
  FileUploadImageResponse400,
  FileUploadImageResponse404,
  FileUploadImageResponse409,
  FileUploadImageResponse500,
  FileUploadImageResponseDefault,
  HealthCheckCheckResponse200,
  HealthCheckCheckResponse503,
  IndividualInvestorUpdateBodyParam,
  IndividualInvestorUpdateResponse400,
  IndividualInvestorUpdateResponse404,
  IndividualInvestorUpdateResponse409,
  IndividualInvestorUpdateResponse500,
  InvestorAuthConfirmRetrieveBodyParam,
  InvestorAuthConfirmRetrieveResponse400,
  InvestorAuthConfirmRetrieveResponse404,
  InvestorAuthConfirmRetrieveResponse409,
  InvestorAuthConfirmRetrieveResponse500,
  InvestorAuthGetMeResponse200,
  InvestorAuthGetMeResponse400,
  InvestorAuthGetMeResponse404,
  InvestorAuthGetMeResponse409,
  InvestorAuthGetMeResponse500,
  InvestorAuthRetrieveAccountMetadataParam,
  InvestorAuthRetrieveAccountResponse400,
  InvestorAuthRetrieveAccountResponse404,
  InvestorAuthRetrieveAccountResponse409,
  InvestorAuthRetrieveAccountResponse500,
  InvestorAuthSignInBodyParam,
  InvestorAuthSignInResponse201,
  InvestorAuthSignInResponse400,
  InvestorAuthSignInResponse404,
  InvestorAuthSignInResponse409,
  InvestorAuthSignInResponse500,
  InvestorAuthSignUpFirstStepMetadataParam,
  InvestorAuthSignUpFirstStepResponse400,
  InvestorAuthSignUpFirstStepResponse500,
  InvestorAuthSignUpSecondStepBodyParam,
  InvestorAuthSignUpSecondStepResponse201,
  InvestorAuthSignUpSecondStepResponse400,
  InvestorAuthSignUpSecondStepResponse404,
  InvestorAuthSignUpSecondStepResponse409,
  InvestorAuthSignUpSecondStepResponse500,
  InvestorDealFindMetadataParam,
  InvestorDealFindResponse200,
  InvestorDealFindResponse400,
  InvestorDealFindResponse404,
  InvestorDealFindResponse409,
  InvestorDealFindResponse500,
  InvestorDealListBodyParam,
  InvestorDealListMetadataParam,
  InvestorDealListResponse201,
  InvestorDealListResponse400,
  InvestorDealListResponse404,
  InvestorDealListResponse409,
  InvestorDealListResponse500,
  InvestorDealSubmitInterestMetadataParam,
  InvestorDealSubmitInterestResponse200,
  InvestorDealSubmitInterestResponse400,
  InvestorDealSubmitInterestResponse404,
  InvestorDealSubmitInterestResponse409,
  InvestorDealSubmitInterestResponse500,
  InvestorEntityCreateBodyParam,
  InvestorEntityCreateMetadataParam,
  InvestorEntityCreateResponse201,
  InvestorEntityCreateResponse400,
  InvestorEntityCreateResponse404,
  InvestorEntityCreateResponse409,
  InvestorEntityCreateResponse500,
  InvestorEntityUpdateBodyParam,
  InvestorEntityUpdateMetadataParam,
  InvestorEntityUpdateResponse200,
  InvestorEntityUpdateResponse400,
  InvestorEntityUpdateResponse404,
  InvestorEntityUpdateResponse409,
  InvestorEntityUpdateResponse500,
  InvestorInboxAcceptTermsMetadataParam,
  InvestorInboxAcceptTermsResponse400,
  InvestorInboxAcceptTermsResponse404,
  InvestorInboxAcceptTermsResponse409,
  InvestorInboxAcceptTermsResponse500,
  InvestorInboxListMetadataParam,
  InvestorInboxListResponse200,
  InvestorInboxListResponse400,
  InvestorInboxListResponse404,
  InvestorInboxListResponse409,
  InvestorInboxListResponse500,
  InvestorUpdateBodyParam,
  InvestorUpdateResponse200,
  InvestorUpdateResponse400,
  InvestorUpdateResponse404,
  InvestorUpdateResponse409,
  InvestorUpdateResponse500,
} from './types';
