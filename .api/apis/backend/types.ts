import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type AdminBrokerInvestorAskForDocumentsBodyParam = FromSchema<
  typeof schemas.AdminBrokerInvestorAskForDocuments.body
>;
export type AdminBrokerInvestorAskForDocumentsMetadataParam = FromSchema<
  typeof schemas.AdminBrokerInvestorAskForDocuments.metadata
>;
export type AdminBrokerInvestorAskForDocumentsResponse400 = FromSchema<
  (typeof schemas.AdminBrokerInvestorAskForDocuments.response)['400']
>;
export type AdminBrokerInvestorAskForDocumentsResponse404 = FromSchema<
  (typeof schemas.AdminBrokerInvestorAskForDocuments.response)['404']
>;
export type AdminBrokerInvestorAskForDocumentsResponse409 = FromSchema<
  (typeof schemas.AdminBrokerInvestorAskForDocuments.response)['409']
>;
export type AdminBrokerInvestorAskForDocumentsResponse500 = FromSchema<
  (typeof schemas.AdminBrokerInvestorAskForDocuments.response)['500']
>;
export type AdminBrokerInvestorUpdateAfslFormStatusBodyParam = FromSchema<
  typeof schemas.AdminBrokerInvestorUpdateAfslFormStatus.body
>;
export type AdminBrokerInvestorUpdateAfslFormStatusMetadataParam = FromSchema<
  typeof schemas.AdminBrokerInvestorUpdateAfslFormStatus.metadata
>;
export type AdminBrokerInvestorUpdateAfslFormStatusResponse400 = FromSchema<
  (typeof schemas.AdminBrokerInvestorUpdateAfslFormStatus.response)['400']
>;
export type AdminBrokerInvestorUpdateAfslFormStatusResponse404 = FromSchema<
  (typeof schemas.AdminBrokerInvestorUpdateAfslFormStatus.response)['404']
>;
export type AdminBrokerInvestorUpdateAfslFormStatusResponse409 = FromSchema<
  (typeof schemas.AdminBrokerInvestorUpdateAfslFormStatus.response)['409']
>;
export type AdminBrokerInvestorUpdateAfslFormStatusResponse500 = FromSchema<
  (typeof schemas.AdminBrokerInvestorUpdateAfslFormStatus.response)['500']
>;
export type AdminCompanyCreateBodyParam = FromSchema<typeof schemas.AdminCompanyCreate.body>;
export type AdminCompanyCreateResponse400 = FromSchema<
  (typeof schemas.AdminCompanyCreate.response)['400']
>;
export type AdminCompanyCreateResponse404 = FromSchema<
  (typeof schemas.AdminCompanyCreate.response)['404']
>;
export type AdminCompanyCreateResponse409 = FromSchema<
  (typeof schemas.AdminCompanyCreate.response)['409']
>;
export type AdminCompanyCreateResponse500 = FromSchema<
  (typeof schemas.AdminCompanyCreate.response)['500']
>;
export type AdminCompanyGetByIdMetadataParam = FromSchema<
  typeof schemas.AdminCompanyGetById.metadata
>;
export type AdminCompanyGetByIdResponse200 = FromSchema<
  (typeof schemas.AdminCompanyGetById.response)['200']
>;
export type AdminCompanyGetByIdResponse400 = FromSchema<
  (typeof schemas.AdminCompanyGetById.response)['400']
>;
export type AdminCompanyGetByIdResponse404 = FromSchema<
  (typeof schemas.AdminCompanyGetById.response)['404']
>;
export type AdminCompanyGetByIdResponse409 = FromSchema<
  (typeof schemas.AdminCompanyGetById.response)['409']
>;
export type AdminCompanyGetByIdResponse500 = FromSchema<
  (typeof schemas.AdminCompanyGetById.response)['500']
>;
export type AdminCompanyListMetadataParam = FromSchema<typeof schemas.AdminCompanyList.metadata>;
export type AdminCompanyListResponse200 = FromSchema<
  (typeof schemas.AdminCompanyList.response)['200']
>;
export type AdminCompanyListResponse400 = FromSchema<
  (typeof schemas.AdminCompanyList.response)['400']
>;
export type AdminCompanyListResponse404 = FromSchema<
  (typeof schemas.AdminCompanyList.response)['404']
>;
export type AdminCompanyListResponse409 = FromSchema<
  (typeof schemas.AdminCompanyList.response)['409']
>;
export type AdminCompanyListResponse500 = FromSchema<
  (typeof schemas.AdminCompanyList.response)['500']
>;
export type AdminCompanyUpdateBodyParam = FromSchema<typeof schemas.AdminCompanyUpdate.body>;
export type AdminCompanyUpdateMetadataParam = FromSchema<
  typeof schemas.AdminCompanyUpdate.metadata
>;
export type AdminCompanyUpdateResponse400 = FromSchema<
  (typeof schemas.AdminCompanyUpdate.response)['400']
>;
export type AdminCompanyUpdateResponse404 = FromSchema<
  (typeof schemas.AdminCompanyUpdate.response)['404']
>;
export type AdminCompanyUpdateResponse409 = FromSchema<
  (typeof schemas.AdminCompanyUpdate.response)['409']
>;
export type AdminCompanyUpdateResponse500 = FromSchema<
  (typeof schemas.AdminCompanyUpdate.response)['500']
>;
export type AdminDealCloseBidsMetadataParam = FromSchema<
  typeof schemas.AdminDealCloseBids.metadata
>;
export type AdminDealCloseBidsResponse200 = FromSchema<
  (typeof schemas.AdminDealCloseBids.response)['200']
>;
export type AdminDealCloseBidsResponse400 = FromSchema<
  (typeof schemas.AdminDealCloseBids.response)['400']
>;
export type AdminDealCloseBidsResponse404 = FromSchema<
  (typeof schemas.AdminDealCloseBids.response)['404']
>;
export type AdminDealCloseBidsResponse409 = FromSchema<
  (typeof schemas.AdminDealCloseBids.response)['409']
>;
export type AdminDealCloseBidsResponse500 = FromSchema<
  (typeof schemas.AdminDealCloseBids.response)['500']
>;
export type AdminDealCreateBodyParam = FromSchema<typeof schemas.AdminDealCreate.body>;
export type AdminDealCreateResponse201 = FromSchema<
  (typeof schemas.AdminDealCreate.response)['201']
>;
export type AdminDealCreateResponse400 = FromSchema<
  (typeof schemas.AdminDealCreate.response)['400']
>;
export type AdminDealCreateResponse404 = FromSchema<
  (typeof schemas.AdminDealCreate.response)['404']
>;
export type AdminDealCreateResponse409 = FromSchema<
  (typeof schemas.AdminDealCreate.response)['409']
>;
export type AdminDealCreateResponse500 = FromSchema<
  (typeof schemas.AdminDealCreate.response)['500']
>;
export type AdminDealGetByIdMetadataParam = FromSchema<typeof schemas.AdminDealGetById.metadata>;
export type AdminDealGetByIdResponse200 = FromSchema<
  (typeof schemas.AdminDealGetById.response)['200']
>;
export type AdminDealGetByIdResponse400 = FromSchema<
  (typeof schemas.AdminDealGetById.response)['400']
>;
export type AdminDealGetByIdResponse404 = FromSchema<
  (typeof schemas.AdminDealGetById.response)['404']
>;
export type AdminDealGetByIdResponse409 = FromSchema<
  (typeof schemas.AdminDealGetById.response)['409']
>;
export type AdminDealGetByIdResponse500 = FromSchema<
  (typeof schemas.AdminDealGetById.response)['500']
>;
export type AdminDealListMetadataParam = FromSchema<typeof schemas.AdminDealList.metadata>;
export type AdminDealListResponse200 = FromSchema<(typeof schemas.AdminDealList.response)['200']>;
export type AdminDealListResponse400 = FromSchema<(typeof schemas.AdminDealList.response)['400']>;
export type AdminDealListResponse404 = FromSchema<(typeof schemas.AdminDealList.response)['404']>;
export type AdminDealListResponse409 = FromSchema<(typeof schemas.AdminDealList.response)['409']>;
export type AdminDealListResponse500 = FromSchema<(typeof schemas.AdminDealList.response)['500']>;
export type AdminDealLogListMetadataParam = FromSchema<typeof schemas.AdminDealLogList.metadata>;
export type AdminDealLogListResponse200 = FromSchema<
  (typeof schemas.AdminDealLogList.response)['200']
>;
export type AdminDealLogListResponse400 = FromSchema<
  (typeof schemas.AdminDealLogList.response)['400']
>;
export type AdminDealLogListResponse404 = FromSchema<
  (typeof schemas.AdminDealLogList.response)['404']
>;
export type AdminDealLogListResponse409 = FromSchema<
  (typeof schemas.AdminDealLogList.response)['409']
>;
export type AdminDealLogListResponse500 = FromSchema<
  (typeof schemas.AdminDealLogList.response)['500']
>;
export type AdminDealUpdateBodyParam = FromSchema<typeof schemas.AdminDealUpdate.body>;
export type AdminDealUpdateMetadataParam = FromSchema<typeof schemas.AdminDealUpdate.metadata>;
export type AdminDealUpdateResponse200 = FromSchema<
  (typeof schemas.AdminDealUpdate.response)['200']
>;
export type AdminDealUpdateResponse400 = FromSchema<
  (typeof schemas.AdminDealUpdate.response)['400']
>;
export type AdminDealUpdateResponse404 = FromSchema<
  (typeof schemas.AdminDealUpdate.response)['404']
>;
export type AdminDealUpdateResponse409 = FromSchema<
  (typeof schemas.AdminDealUpdate.response)['409']
>;
export type AdminDealUpdateResponse500 = FromSchema<
  (typeof schemas.AdminDealUpdate.response)['500']
>;
export type AdminIndividualInvestorAskForDocumentsBodyParam = FromSchema<
  typeof schemas.AdminIndividualInvestorAskForDocuments.body
>;
export type AdminIndividualInvestorAskForDocumentsMetadataParam = FromSchema<
  typeof schemas.AdminIndividualInvestorAskForDocuments.metadata
>;
export type AdminIndividualInvestorAskForDocumentsResponse400 = FromSchema<
  (typeof schemas.AdminIndividualInvestorAskForDocuments.response)['400']
>;
export type AdminIndividualInvestorAskForDocumentsResponse404 = FromSchema<
  (typeof schemas.AdminIndividualInvestorAskForDocuments.response)['404']
>;
export type AdminIndividualInvestorAskForDocumentsResponse409 = FromSchema<
  (typeof schemas.AdminIndividualInvestorAskForDocuments.response)['409']
>;
export type AdminIndividualInvestorAskForDocumentsResponse500 = FromSchema<
  (typeof schemas.AdminIndividualInvestorAskForDocuments.response)['500']
>;
export type AdminIndividualInvestorChangeSiDocumentStatusBodyParam = FromSchema<
  typeof schemas.AdminIndividualInvestorChangeSiDocumentStatus.body
>;
export type AdminIndividualInvestorChangeSiDocumentStatusMetadataParam = FromSchema<
  typeof schemas.AdminIndividualInvestorChangeSiDocumentStatus.metadata
>;
export type AdminIndividualInvestorChangeSiDocumentStatusResponse400 = FromSchema<
  (typeof schemas.AdminIndividualInvestorChangeSiDocumentStatus.response)['400']
>;
export type AdminIndividualInvestorChangeSiDocumentStatusResponse404 = FromSchema<
  (typeof schemas.AdminIndividualInvestorChangeSiDocumentStatus.response)['404']
>;
export type AdminIndividualInvestorChangeSiDocumentStatusResponse409 = FromSchema<
  (typeof schemas.AdminIndividualInvestorChangeSiDocumentStatus.response)['409']
>;
export type AdminIndividualInvestorChangeSiDocumentStatusResponse500 = FromSchema<
  (typeof schemas.AdminIndividualInvestorChangeSiDocumentStatus.response)['500']
>;
export type AdminInvestorEntityCreateBodyParam = FromSchema<
  typeof schemas.AdminInvestorEntityCreate.body
>;
export type AdminInvestorEntityCreateMetadataParam = FromSchema<
  typeof schemas.AdminInvestorEntityCreate.metadata
>;
export type AdminInvestorEntityCreateResponse201 = FromSchema<
  (typeof schemas.AdminInvestorEntityCreate.response)['201']
>;
export type AdminInvestorEntityCreateResponse400 = FromSchema<
  (typeof schemas.AdminInvestorEntityCreate.response)['400']
>;
export type AdminInvestorEntityCreateResponse404 = FromSchema<
  (typeof schemas.AdminInvestorEntityCreate.response)['404']
>;
export type AdminInvestorEntityCreateResponse409 = FromSchema<
  (typeof schemas.AdminInvestorEntityCreate.response)['409']
>;
export type AdminInvestorEntityCreateResponse500 = FromSchema<
  (typeof schemas.AdminInvestorEntityCreate.response)['500']
>;
export type AdminInvestorEntityUpdateBodyParam = FromSchema<
  typeof schemas.AdminInvestorEntityUpdate.body
>;
export type AdminInvestorEntityUpdateMetadataParam = FromSchema<
  typeof schemas.AdminInvestorEntityUpdate.metadata
>;
export type AdminInvestorEntityUpdateResponse200 = FromSchema<
  (typeof schemas.AdminInvestorEntityUpdate.response)['200']
>;
export type AdminInvestorEntityUpdateResponse400 = FromSchema<
  (typeof schemas.AdminInvestorEntityUpdate.response)['400']
>;
export type AdminInvestorEntityUpdateResponse404 = FromSchema<
  (typeof schemas.AdminInvestorEntityUpdate.response)['404']
>;
export type AdminInvestorEntityUpdateResponse409 = FromSchema<
  (typeof schemas.AdminInvestorEntityUpdate.response)['409']
>;
export type AdminInvestorEntityUpdateResponse500 = FromSchema<
  (typeof schemas.AdminInvestorEntityUpdate.response)['500']
>;
export type AdminInvestorFindOneMetadataParam = FromSchema<
  typeof schemas.AdminInvestorFindOne.metadata
>;
export type AdminInvestorFindOneResponse200 = FromSchema<
  (typeof schemas.AdminInvestorFindOne.response)['200']
>;
export type AdminInvestorFindOneResponse400 = FromSchema<
  (typeof schemas.AdminInvestorFindOne.response)['400']
>;
export type AdminInvestorFindOneResponse404 = FromSchema<
  (typeof schemas.AdminInvestorFindOne.response)['404']
>;
export type AdminInvestorFindOneResponse409 = FromSchema<
  (typeof schemas.AdminInvestorFindOne.response)['409']
>;
export type AdminInvestorFindOneResponse500 = FromSchema<
  (typeof schemas.AdminInvestorFindOne.response)['500']
>;
export type AdminInvestorGroupAddInvestorMetadataParam = FromSchema<
  typeof schemas.AdminInvestorGroupAddInvestor.metadata
>;
export type AdminInvestorGroupAddInvestorResponse400 = FromSchema<
  (typeof schemas.AdminInvestorGroupAddInvestor.response)['400']
>;
export type AdminInvestorGroupAddInvestorResponse404 = FromSchema<
  (typeof schemas.AdminInvestorGroupAddInvestor.response)['404']
>;
export type AdminInvestorGroupAddInvestorResponse409 = FromSchema<
  (typeof schemas.AdminInvestorGroupAddInvestor.response)['409']
>;
export type AdminInvestorGroupAddInvestorResponse500 = FromSchema<
  (typeof schemas.AdminInvestorGroupAddInvestor.response)['500']
>;
export type AdminInvestorGroupCreateBodyParam = FromSchema<
  typeof schemas.AdminInvestorGroupCreate.body
>;
export type AdminInvestorGroupCreateResponse400 = FromSchema<
  (typeof schemas.AdminInvestorGroupCreate.response)['400']
>;
export type AdminInvestorGroupCreateResponse404 = FromSchema<
  (typeof schemas.AdminInvestorGroupCreate.response)['404']
>;
export type AdminInvestorGroupCreateResponse409 = FromSchema<
  (typeof schemas.AdminInvestorGroupCreate.response)['409']
>;
export type AdminInvestorGroupCreateResponse500 = FromSchema<
  (typeof schemas.AdminInvestorGroupCreate.response)['500']
>;
export type AdminInvestorGroupDeleteMetadataParam = FromSchema<
  typeof schemas.AdminInvestorGroupDelete.metadata
>;
export type AdminInvestorGroupDeleteResponse400 = FromSchema<
  (typeof schemas.AdminInvestorGroupDelete.response)['400']
>;
export type AdminInvestorGroupDeleteResponse404 = FromSchema<
  (typeof schemas.AdminInvestorGroupDelete.response)['404']
>;
export type AdminInvestorGroupDeleteResponse409 = FromSchema<
  (typeof schemas.AdminInvestorGroupDelete.response)['409']
>;
export type AdminInvestorGroupDeleteResponse500 = FromSchema<
  (typeof schemas.AdminInvestorGroupDelete.response)['500']
>;
export type AdminInvestorGroupGetMetadataParam = FromSchema<
  typeof schemas.AdminInvestorGroupGet.metadata
>;
export type AdminInvestorGroupGetResponse200 = FromSchema<
  (typeof schemas.AdminInvestorGroupGet.response)['200']
>;
export type AdminInvestorGroupGetResponse400 = FromSchema<
  (typeof schemas.AdminInvestorGroupGet.response)['400']
>;
export type AdminInvestorGroupGetResponse404 = FromSchema<
  (typeof schemas.AdminInvestorGroupGet.response)['404']
>;
export type AdminInvestorGroupGetResponse409 = FromSchema<
  (typeof schemas.AdminInvestorGroupGet.response)['409']
>;
export type AdminInvestorGroupGetResponse500 = FromSchema<
  (typeof schemas.AdminInvestorGroupGet.response)['500']
>;
export type AdminInvestorGroupListMetadataParam = FromSchema<
  typeof schemas.AdminInvestorGroupList.metadata
>;
export type AdminInvestorGroupListResponse200 = FromSchema<
  (typeof schemas.AdminInvestorGroupList.response)['200']
>;
export type AdminInvestorGroupListResponse400 = FromSchema<
  (typeof schemas.AdminInvestorGroupList.response)['400']
>;
export type AdminInvestorGroupListResponse404 = FromSchema<
  (typeof schemas.AdminInvestorGroupList.response)['404']
>;
export type AdminInvestorGroupListResponse409 = FromSchema<
  (typeof schemas.AdminInvestorGroupList.response)['409']
>;
export type AdminInvestorGroupListResponse500 = FromSchema<
  (typeof schemas.AdminInvestorGroupList.response)['500']
>;
export type AdminInvestorGroupRemoveInvestorMetadataParam = FromSchema<
  typeof schemas.AdminInvestorGroupRemoveInvestor.metadata
>;
export type AdminInvestorGroupRemoveInvestorResponse200 = FromSchema<
  (typeof schemas.AdminInvestorGroupRemoveInvestor.response)['200']
>;
export type AdminInvestorGroupRemoveInvestorResponse400 = FromSchema<
  (typeof schemas.AdminInvestorGroupRemoveInvestor.response)['400']
>;
export type AdminInvestorGroupRemoveInvestorResponse404 = FromSchema<
  (typeof schemas.AdminInvestorGroupRemoveInvestor.response)['404']
>;
export type AdminInvestorGroupRemoveInvestorResponse409 = FromSchema<
  (typeof schemas.AdminInvestorGroupRemoveInvestor.response)['409']
>;
export type AdminInvestorGroupRemoveInvestorResponse500 = FromSchema<
  (typeof schemas.AdminInvestorGroupRemoveInvestor.response)['500']
>;
export type AdminInvestorGroupUpdateBodyParam = FromSchema<
  typeof schemas.AdminInvestorGroupUpdate.body
>;
export type AdminInvestorGroupUpdateMetadataParam = FromSchema<
  typeof schemas.AdminInvestorGroupUpdate.metadata
>;
export type AdminInvestorGroupUpdateResponse400 = FromSchema<
  (typeof schemas.AdminInvestorGroupUpdate.response)['400']
>;
export type AdminInvestorGroupUpdateResponse404 = FromSchema<
  (typeof schemas.AdminInvestorGroupUpdate.response)['404']
>;
export type AdminInvestorGroupUpdateResponse409 = FromSchema<
  (typeof schemas.AdminInvestorGroupUpdate.response)['409']
>;
export type AdminInvestorGroupUpdateResponse500 = FromSchema<
  (typeof schemas.AdminInvestorGroupUpdate.response)['500']
>;
export type AdminInvestorListMetadataParam = FromSchema<typeof schemas.AdminInvestorList.metadata>;
export type AdminInvestorListResponse200 = FromSchema<
  (typeof schemas.AdminInvestorList.response)['200']
>;
export type AdminInvestorListResponse400 = FromSchema<
  (typeof schemas.AdminInvestorList.response)['400']
>;
export type AdminInvestorListResponse404 = FromSchema<
  (typeof schemas.AdminInvestorList.response)['404']
>;
export type AdminInvestorListResponse409 = FromSchema<
  (typeof schemas.AdminInvestorList.response)['409']
>;
export type AdminInvestorListResponse500 = FromSchema<
  (typeof schemas.AdminInvestorList.response)['500']
>;
export type AdminInvestorUpdateBodyParam = FromSchema<typeof schemas.AdminInvestorUpdate.body>;
export type AdminInvestorUpdateMetadataParam = FromSchema<
  typeof schemas.AdminInvestorUpdate.metadata
>;
export type AdminInvestorUpdateResponse200 = FromSchema<
  (typeof schemas.AdminInvestorUpdate.response)['200']
>;
export type AdminInvestorUpdateResponse400 = FromSchema<
  (typeof schemas.AdminInvestorUpdate.response)['400']
>;
export type AdminInvestorUpdateResponse404 = FromSchema<
  (typeof schemas.AdminInvestorUpdate.response)['404']
>;
export type AdminInvestorUpdateResponse409 = FromSchema<
  (typeof schemas.AdminInvestorUpdate.response)['409']
>;
export type AdminInvestorUpdateResponse500 = FromSchema<
  (typeof schemas.AdminInvestorUpdate.response)['500']
>;
export type AppGetHelloResponse200 = FromSchema<(typeof schemas.AppGetHello.response)['200']>;
export type AuthAdminCreateBodyParam = FromSchema<typeof schemas.AuthAdminCreate.body>;
export type AuthAdminCreateResponse400 = FromSchema<
  (typeof schemas.AuthAdminCreate.response)['400']
>;
export type AuthAdminCreateResponse404 = FromSchema<
  (typeof schemas.AuthAdminCreate.response)['404']
>;
export type AuthAdminCreateResponse409 = FromSchema<
  (typeof schemas.AuthAdminCreate.response)['409']
>;
export type AuthAdminCreateResponse500 = FromSchema<
  (typeof schemas.AuthAdminCreate.response)['500']
>;
export type AuthAdminLoginFirstStepBodyParam = FromSchema<
  typeof schemas.AuthAdminLoginFirstStep.body
>;
export type AuthAdminLoginFirstStepResponse201 = FromSchema<
  (typeof schemas.AuthAdminLoginFirstStep.response)['201']
>;
export type AuthAdminLoginFirstStepResponse400 = FromSchema<
  (typeof schemas.AuthAdminLoginFirstStep.response)['400']
>;
export type AuthAdminLoginFirstStepResponse404 = FromSchema<
  (typeof schemas.AuthAdminLoginFirstStep.response)['404']
>;
export type AuthAdminLoginFirstStepResponse409 = FromSchema<
  (typeof schemas.AuthAdminLoginFirstStep.response)['409']
>;
export type AuthAdminLoginFirstStepResponse500 = FromSchema<
  (typeof schemas.AuthAdminLoginFirstStep.response)['500']
>;
export type AuthAdminLoginSecondStepBodyParam = FromSchema<
  typeof schemas.AuthAdminLoginSecondStep.body
>;
export type AuthAdminLoginSecondStepResponse201 = FromSchema<
  (typeof schemas.AuthAdminLoginSecondStep.response)['201']
>;
export type AuthAdminLoginSecondStepResponse400 = FromSchema<
  (typeof schemas.AuthAdminLoginSecondStep.response)['400']
>;
export type AuthAdminLoginSecondStepResponse404 = FromSchema<
  (typeof schemas.AuthAdminLoginSecondStep.response)['404']
>;
export type AuthAdminLoginSecondStepResponse409 = FromSchema<
  (typeof schemas.AuthAdminLoginSecondStep.response)['409']
>;
export type AuthAdminLoginSecondStepResponse500 = FromSchema<
  (typeof schemas.AuthAdminLoginSecondStep.response)['500']
>;
export type AuthAdminMeResponse200 = FromSchema<(typeof schemas.AuthAdminMe.response)['200']>;
export type AuthAdminMeResponse400 = FromSchema<(typeof schemas.AuthAdminMe.response)['400']>;
export type AuthAdminMeResponse404 = FromSchema<(typeof schemas.AuthAdminMe.response)['404']>;
export type AuthAdminMeResponse409 = FromSchema<(typeof schemas.AuthAdminMe.response)['409']>;
export type AuthAdminMeResponse500 = FromSchema<(typeof schemas.AuthAdminMe.response)['500']>;
export type BidAdminCreateBodyParam = FromSchema<typeof schemas.BidAdminCreate.body>;
export type BidAdminCreateMetadataParam = FromSchema<typeof schemas.BidAdminCreate.metadata>;
export type BidAdminCreateResponse201 = FromSchema<(typeof schemas.BidAdminCreate.response)['201']>;
export type BidAdminCreateResponse400 = FromSchema<(typeof schemas.BidAdminCreate.response)['400']>;
export type BidAdminCreateResponse404 = FromSchema<(typeof schemas.BidAdminCreate.response)['404']>;
export type BidAdminCreateResponse409 = FromSchema<(typeof schemas.BidAdminCreate.response)['409']>;
export type BidAdminCreateResponse500 = FromSchema<(typeof schemas.BidAdminCreate.response)['500']>;
export type BidAdminDeleteMetadataParam = FromSchema<typeof schemas.BidAdminDelete.metadata>;
export type BidAdminDeleteResponse200 = FromSchema<(typeof schemas.BidAdminDelete.response)['200']>;
export type BidAdminDeleteResponse400 = FromSchema<(typeof schemas.BidAdminDelete.response)['400']>;
export type BidAdminDeleteResponse404 = FromSchema<(typeof schemas.BidAdminDelete.response)['404']>;
export type BidAdminDeleteResponse409 = FromSchema<(typeof schemas.BidAdminDelete.response)['409']>;
export type BidAdminDeleteResponse500 = FromSchema<(typeof schemas.BidAdminDelete.response)['500']>;
export type BidAdminUpdateBodyParam = FromSchema<typeof schemas.BidAdminUpdate.body>;
export type BidAdminUpdateMetadataParam = FromSchema<typeof schemas.BidAdminUpdate.metadata>;
export type BidAdminUpdateResponse200 = FromSchema<(typeof schemas.BidAdminUpdate.response)['200']>;
export type BidAdminUpdateResponse400 = FromSchema<(typeof schemas.BidAdminUpdate.response)['400']>;
export type BidAdminUpdateResponse404 = FromSchema<(typeof schemas.BidAdminUpdate.response)['404']>;
export type BidAdminUpdateResponse409 = FromSchema<(typeof schemas.BidAdminUpdate.response)['409']>;
export type BidAdminUpdateResponse500 = FromSchema<(typeof schemas.BidAdminUpdate.response)['500']>;
export type BidCreateBodyParam = FromSchema<typeof schemas.BidCreate.body>;
export type BidCreateMetadataParam = FromSchema<typeof schemas.BidCreate.metadata>;
export type BidCreateResponse201 = FromSchema<(typeof schemas.BidCreate.response)['201']>;
export type BidCreateResponse400 = FromSchema<(typeof schemas.BidCreate.response)['400']>;
export type BidCreateResponse404 = FromSchema<(typeof schemas.BidCreate.response)['404']>;
export type BidCreateResponse409 = FromSchema<(typeof schemas.BidCreate.response)['409']>;
export type BidCreateResponse500 = FromSchema<(typeof schemas.BidCreate.response)['500']>;
export type BrokerInvestorUpdateBodyParam = FromSchema<typeof schemas.BrokerInvestorUpdate.body>;
export type BrokerInvestorUpdateResponse400 = FromSchema<
  (typeof schemas.BrokerInvestorUpdate.response)['400']
>;
export type BrokerInvestorUpdateResponse404 = FromSchema<
  (typeof schemas.BrokerInvestorUpdate.response)['404']
>;
export type BrokerInvestorUpdateResponse409 = FromSchema<
  (typeof schemas.BrokerInvestorUpdate.response)['409']
>;
export type BrokerInvestorUpdateResponse500 = FromSchema<
  (typeof schemas.BrokerInvestorUpdate.response)['500']
>;
export type DealAllocationCreateBodyParam = FromSchema<typeof schemas.DealAllocationCreate.body>;
export type DealAllocationCreateMetadataParam = FromSchema<
  typeof schemas.DealAllocationCreate.metadata
>;
export type DealAllocationCreateResponse200 = FromSchema<
  (typeof schemas.DealAllocationCreate.response)['200']
>;
export type DealAllocationCreateResponse400 = FromSchema<
  (typeof schemas.DealAllocationCreate.response)['400']
>;
export type DealAllocationCreateResponse404 = FromSchema<
  (typeof schemas.DealAllocationCreate.response)['404']
>;
export type DealAllocationCreateResponse409 = FromSchema<
  (typeof schemas.DealAllocationCreate.response)['409']
>;
export type DealAllocationCreateResponse500 = FromSchema<
  (typeof schemas.DealAllocationCreate.response)['500']
>;
export type DealAllocationFindOneMetadataParam = FromSchema<
  typeof schemas.DealAllocationFindOne.metadata
>;
export type DealAllocationFindOneResponse200 = FromSchema<
  (typeof schemas.DealAllocationFindOne.response)['200']
>;
export type DealAllocationFindOneResponse400 = FromSchema<
  (typeof schemas.DealAllocationFindOne.response)['400']
>;
export type DealAllocationFindOneResponse404 = FromSchema<
  (typeof schemas.DealAllocationFindOne.response)['404']
>;
export type DealAllocationFindOneResponse409 = FromSchema<
  (typeof schemas.DealAllocationFindOne.response)['409']
>;
export type DealAllocationFindOneResponse500 = FromSchema<
  (typeof schemas.DealAllocationFindOne.response)['500']
>;
export type FileDownloadMetadataParam = FromSchema<typeof schemas.FileDownload.metadata>;
export type FileDownloadResizeMetadataParam = FromSchema<
  typeof schemas.FileDownloadResize.metadata
>;
export type FileDownloadResizeResponse400 = FromSchema<
  (typeof schemas.FileDownloadResize.response)['400']
>;
export type FileDownloadResizeResponse404 = FromSchema<
  (typeof schemas.FileDownloadResize.response)['404']
>;
export type FileDownloadResizeResponse409 = FromSchema<
  (typeof schemas.FileDownloadResize.response)['409']
>;
export type FileDownloadResizeResponse500 = FromSchema<
  (typeof schemas.FileDownloadResize.response)['500']
>;
export type FileDownloadResponse400 = FromSchema<(typeof schemas.FileDownload.response)['400']>;
export type FileDownloadResponse404 = FromSchema<(typeof schemas.FileDownload.response)['404']>;
export type FileDownloadResponse409 = FromSchema<(typeof schemas.FileDownload.response)['409']>;
export type FileDownloadResponse500 = FromSchema<(typeof schemas.FileDownload.response)['500']>;
export type FileUploadImageMetadataParam = FromSchema<typeof schemas.FileUploadImage.metadata>;
export type FileUploadImageResponse400 = FromSchema<
  (typeof schemas.FileUploadImage.response)['400']
>;
export type FileUploadImageResponse404 = FromSchema<
  (typeof schemas.FileUploadImage.response)['404']
>;
export type FileUploadImageResponse409 = FromSchema<
  (typeof schemas.FileUploadImage.response)['409']
>;
export type FileUploadImageResponse500 = FromSchema<
  (typeof schemas.FileUploadImage.response)['500']
>;
export type FileUploadImageResponseDefault = FromSchema<
  (typeof schemas.FileUploadImage.response)['default']
>;
export type HealthCheckCheckResponse200 = FromSchema<
  (typeof schemas.HealthCheckCheck.response)['200']
>;
export type HealthCheckCheckResponse503 = FromSchema<
  (typeof schemas.HealthCheckCheck.response)['503']
>;
export type IndividualInvestorUpdateBodyParam = FromSchema<
  typeof schemas.IndividualInvestorUpdate.body
>;
export type IndividualInvestorUpdateResponse400 = FromSchema<
  (typeof schemas.IndividualInvestorUpdate.response)['400']
>;
export type IndividualInvestorUpdateResponse404 = FromSchema<
  (typeof schemas.IndividualInvestorUpdate.response)['404']
>;
export type IndividualInvestorUpdateResponse409 = FromSchema<
  (typeof schemas.IndividualInvestorUpdate.response)['409']
>;
export type IndividualInvestorUpdateResponse500 = FromSchema<
  (typeof schemas.IndividualInvestorUpdate.response)['500']
>;
export type InvestorAuthConfirmRetrieveBodyParam = FromSchema<
  typeof schemas.InvestorAuthConfirmRetrieve.body
>;
export type InvestorAuthConfirmRetrieveResponse400 = FromSchema<
  (typeof schemas.InvestorAuthConfirmRetrieve.response)['400']
>;
export type InvestorAuthConfirmRetrieveResponse404 = FromSchema<
  (typeof schemas.InvestorAuthConfirmRetrieve.response)['404']
>;
export type InvestorAuthConfirmRetrieveResponse409 = FromSchema<
  (typeof schemas.InvestorAuthConfirmRetrieve.response)['409']
>;
export type InvestorAuthConfirmRetrieveResponse500 = FromSchema<
  (typeof schemas.InvestorAuthConfirmRetrieve.response)['500']
>;
export type InvestorAuthGetMeResponse200 = FromSchema<
  (typeof schemas.InvestorAuthGetMe.response)['200']
>;
export type InvestorAuthGetMeResponse400 = FromSchema<
  (typeof schemas.InvestorAuthGetMe.response)['400']
>;
export type InvestorAuthGetMeResponse404 = FromSchema<
  (typeof schemas.InvestorAuthGetMe.response)['404']
>;
export type InvestorAuthGetMeResponse409 = FromSchema<
  (typeof schemas.InvestorAuthGetMe.response)['409']
>;
export type InvestorAuthGetMeResponse500 = FromSchema<
  (typeof schemas.InvestorAuthGetMe.response)['500']
>;
export type InvestorAuthRetrieveAccountMetadataParam = FromSchema<
  typeof schemas.InvestorAuthRetrieveAccount.metadata
>;
export type InvestorAuthRetrieveAccountResponse400 = FromSchema<
  (typeof schemas.InvestorAuthRetrieveAccount.response)['400']
>;
export type InvestorAuthRetrieveAccountResponse404 = FromSchema<
  (typeof schemas.InvestorAuthRetrieveAccount.response)['404']
>;
export type InvestorAuthRetrieveAccountResponse409 = FromSchema<
  (typeof schemas.InvestorAuthRetrieveAccount.response)['409']
>;
export type InvestorAuthRetrieveAccountResponse500 = FromSchema<
  (typeof schemas.InvestorAuthRetrieveAccount.response)['500']
>;
export type InvestorAuthSignInBodyParam = FromSchema<typeof schemas.InvestorAuthSignIn.body>;
export type InvestorAuthSignInResponse201 = FromSchema<
  (typeof schemas.InvestorAuthSignIn.response)['201']
>;
export type InvestorAuthSignInResponse400 = FromSchema<
  (typeof schemas.InvestorAuthSignIn.response)['400']
>;
export type InvestorAuthSignInResponse404 = FromSchema<
  (typeof schemas.InvestorAuthSignIn.response)['404']
>;
export type InvestorAuthSignInResponse409 = FromSchema<
  (typeof schemas.InvestorAuthSignIn.response)['409']
>;
export type InvestorAuthSignInResponse500 = FromSchema<
  (typeof schemas.InvestorAuthSignIn.response)['500']
>;
export type InvestorAuthSignUpFirstStepMetadataParam = FromSchema<
  typeof schemas.InvestorAuthSignUpFirstStep.metadata
>;
export type InvestorAuthSignUpFirstStepResponse400 = FromSchema<
  (typeof schemas.InvestorAuthSignUpFirstStep.response)['400']
>;
export type InvestorAuthSignUpFirstStepResponse500 = FromSchema<
  (typeof schemas.InvestorAuthSignUpFirstStep.response)['500']
>;
export type InvestorAuthSignUpSecondStepBodyParam = FromSchema<
  typeof schemas.InvestorAuthSignUpSecondStep.body
>;
export type InvestorAuthSignUpSecondStepResponse201 = FromSchema<
  (typeof schemas.InvestorAuthSignUpSecondStep.response)['201']
>;
export type InvestorAuthSignUpSecondStepResponse400 = FromSchema<
  (typeof schemas.InvestorAuthSignUpSecondStep.response)['400']
>;
export type InvestorAuthSignUpSecondStepResponse404 = FromSchema<
  (typeof schemas.InvestorAuthSignUpSecondStep.response)['404']
>;
export type InvestorAuthSignUpSecondStepResponse409 = FromSchema<
  (typeof schemas.InvestorAuthSignUpSecondStep.response)['409']
>;
export type InvestorAuthSignUpSecondStepResponse500 = FromSchema<
  (typeof schemas.InvestorAuthSignUpSecondStep.response)['500']
>;
export type InvestorDealFindMetadataParam = FromSchema<typeof schemas.InvestorDealFind.metadata>;
export type InvestorDealFindResponse200 = FromSchema<
  (typeof schemas.InvestorDealFind.response)['200']
>;
export type InvestorDealFindResponse400 = FromSchema<
  (typeof schemas.InvestorDealFind.response)['400']
>;
export type InvestorDealFindResponse404 = FromSchema<
  (typeof schemas.InvestorDealFind.response)['404']
>;
export type InvestorDealFindResponse409 = FromSchema<
  (typeof schemas.InvestorDealFind.response)['409']
>;
export type InvestorDealFindResponse500 = FromSchema<
  (typeof schemas.InvestorDealFind.response)['500']
>;
export type InvestorDealListBodyParam = FromSchema<typeof schemas.InvestorDealList.body>;
export type InvestorDealListMetadataParam = FromSchema<typeof schemas.InvestorDealList.metadata>;
export type InvestorDealListResponse201 = FromSchema<
  (typeof schemas.InvestorDealList.response)['201']
>;
export type InvestorDealListResponse400 = FromSchema<
  (typeof schemas.InvestorDealList.response)['400']
>;
export type InvestorDealListResponse404 = FromSchema<
  (typeof schemas.InvestorDealList.response)['404']
>;
export type InvestorDealListResponse409 = FromSchema<
  (typeof schemas.InvestorDealList.response)['409']
>;
export type InvestorDealListResponse500 = FromSchema<
  (typeof schemas.InvestorDealList.response)['500']
>;
export type InvestorDealSubmitInterestMetadataParam = FromSchema<
  typeof schemas.InvestorDealSubmitInterest.metadata
>;
export type InvestorDealSubmitInterestResponse200 = FromSchema<
  (typeof schemas.InvestorDealSubmitInterest.response)['200']
>;
export type InvestorDealSubmitInterestResponse400 = FromSchema<
  (typeof schemas.InvestorDealSubmitInterest.response)['400']
>;
export type InvestorDealSubmitInterestResponse404 = FromSchema<
  (typeof schemas.InvestorDealSubmitInterest.response)['404']
>;
export type InvestorDealSubmitInterestResponse409 = FromSchema<
  (typeof schemas.InvestorDealSubmitInterest.response)['409']
>;
export type InvestorDealSubmitInterestResponse500 = FromSchema<
  (typeof schemas.InvestorDealSubmitInterest.response)['500']
>;
export type InvestorEntityCreateBodyParam = FromSchema<typeof schemas.InvestorEntityCreate.body>;
export type InvestorEntityCreateMetadataParam = FromSchema<
  typeof schemas.InvestorEntityCreate.metadata
>;
export type InvestorEntityCreateResponse201 = FromSchema<
  (typeof schemas.InvestorEntityCreate.response)['201']
>;
export type InvestorEntityCreateResponse400 = FromSchema<
  (typeof schemas.InvestorEntityCreate.response)['400']
>;
export type InvestorEntityCreateResponse404 = FromSchema<
  (typeof schemas.InvestorEntityCreate.response)['404']
>;
export type InvestorEntityCreateResponse409 = FromSchema<
  (typeof schemas.InvestorEntityCreate.response)['409']
>;
export type InvestorEntityCreateResponse500 = FromSchema<
  (typeof schemas.InvestorEntityCreate.response)['500']
>;
export type InvestorEntityUpdateBodyParam = FromSchema<typeof schemas.InvestorEntityUpdate.body>;
export type InvestorEntityUpdateMetadataParam = FromSchema<
  typeof schemas.InvestorEntityUpdate.metadata
>;
export type InvestorEntityUpdateResponse200 = FromSchema<
  (typeof schemas.InvestorEntityUpdate.response)['200']
>;
export type InvestorEntityUpdateResponse400 = FromSchema<
  (typeof schemas.InvestorEntityUpdate.response)['400']
>;
export type InvestorEntityUpdateResponse404 = FromSchema<
  (typeof schemas.InvestorEntityUpdate.response)['404']
>;
export type InvestorEntityUpdateResponse409 = FromSchema<
  (typeof schemas.InvestorEntityUpdate.response)['409']
>;
export type InvestorEntityUpdateResponse500 = FromSchema<
  (typeof schemas.InvestorEntityUpdate.response)['500']
>;
export type InvestorInboxAcceptTermsMetadataParam = FromSchema<
  typeof schemas.InvestorInboxAcceptTerms.metadata
>;
export type InvestorInboxAcceptTermsResponse400 = FromSchema<
  (typeof schemas.InvestorInboxAcceptTerms.response)['400']
>;
export type InvestorInboxAcceptTermsResponse404 = FromSchema<
  (typeof schemas.InvestorInboxAcceptTerms.response)['404']
>;
export type InvestorInboxAcceptTermsResponse409 = FromSchema<
  (typeof schemas.InvestorInboxAcceptTerms.response)['409']
>;
export type InvestorInboxAcceptTermsResponse500 = FromSchema<
  (typeof schemas.InvestorInboxAcceptTerms.response)['500']
>;
export type InvestorInboxListMetadataParam = FromSchema<typeof schemas.InvestorInboxList.metadata>;
export type InvestorInboxListResponse200 = FromSchema<
  (typeof schemas.InvestorInboxList.response)['200']
>;
export type InvestorInboxListResponse400 = FromSchema<
  (typeof schemas.InvestorInboxList.response)['400']
>;
export type InvestorInboxListResponse404 = FromSchema<
  (typeof schemas.InvestorInboxList.response)['404']
>;
export type InvestorInboxListResponse409 = FromSchema<
  (typeof schemas.InvestorInboxList.response)['409']
>;
export type InvestorInboxListResponse500 = FromSchema<
  (typeof schemas.InvestorInboxList.response)['500']
>;
export type InvestorUpdateBodyParam = FromSchema<typeof schemas.InvestorUpdate.body>;
export type InvestorUpdateResponse200 = FromSchema<(typeof schemas.InvestorUpdate.response)['200']>;
export type InvestorUpdateResponse400 = FromSchema<(typeof schemas.InvestorUpdate.response)['400']>;
export type InvestorUpdateResponse404 = FromSchema<(typeof schemas.InvestorUpdate.response)['404']>;
export type InvestorUpdateResponse409 = FromSchema<(typeof schemas.InvestorUpdate.response)['409']>;
export type InvestorUpdateResponse500 = FromSchema<(typeof schemas.InvestorUpdate.response)['500']>;
