const AdminBrokerInvestorAskForDocuments = {
  body: {
    type: 'object',
    properties: { afslForm: { type: 'boolean' }, askIdentificationDocument: { type: 'boolean' } },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminBrokerInvestorUpdateAfslFormStatus = {
  body: {
    type: 'object',
    properties: {
      afslFormDocument: {
        type: 'object',
        properties: {
          document: {
            type: 'object',
            properties: { name: { type: 'string' } },
            required: ['name'],
          },
          expiresAt: { format: 'date-time', type: 'string' },
          isApproved: { type: 'boolean' },
        },
        required: ['document'],
      },
    },
    required: ['afslFormDocument'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminCompanyCreate = {
  body: {
    type: 'object',
    properties: {
      logo: { type: 'string' },
      asxCompany: { type: 'object', properties: { code: { type: 'string' } }, required: ['code'] },
      name: { type: 'string' },
      industry: { type: 'string' },
    },
    required: ['name', 'industry'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminCompanyGetById = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['companyId'],
      },
    ],
  },
  response: {
    '200': { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminCompanyList = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          isAsxCompany: {
            enum: [0, 1],
            type: 'number',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter with (true) or without (false) asx companies. Null/Undefined to ignore this filter',
          },
          name: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          page: { minimum: 1, type: 'number', $schema: 'http://json-schema.org/draft-04/schema#' },
          perPage: {
            minimum: 1,
            type: 'number',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: ['page', 'perPage'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              industry: { type: 'string' },
              logo: { type: ['string', 'null'] },
              asxCompany: {
                type: 'object',
                properties: { code: { type: 'string' } },
                required: ['code'],
              },
            },
            required: ['id', 'name', 'industry', 'logo', 'asxCompany'],
          },
        },
        pagination: {
          type: 'object',
          properties: {
            total: { type: 'number' },
            lastPage: { type: 'number' },
            currentPage: { type: 'number' },
            perPage: { type: 'number' },
            from: { type: 'number' },
            to: { type: 'number' },
          },
          required: ['total', 'lastPage', 'currentPage', 'perPage', 'from', 'to'],
        },
      },
      required: ['data', 'pagination'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminCompanyUpdate = {
  body: {
    type: 'object',
    properties: {
      asxCompany: { type: 'object', properties: { code: { type: 'string' } } },
      name: { type: 'string' },
      industry: { type: 'string' },
      logo: { type: ['string', 'null'] },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['companyId'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminDealCloseBids = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['dealId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['Placement', 'MarketPlacement', 'Ipo', 'UnlistedInvestment'],
          description: '`Placement` `MarketPlacement` `Ipo` `UnlistedInvestment`',
        },
        id: { type: 'string' },
        createdAt: { format: 'date-time', type: 'string' },
        number: { type: 'string' },
        isActive: { type: 'boolean' },
        company: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            industry: { type: 'string' },
            logo: { type: ['string', 'null'] },
            asxCompany: {
              type: 'object',
              properties: { code: { type: 'string' } },
              required: ['code'],
            },
          },
          required: ['id', 'name', 'industry', 'logo', 'asxCompany'],
        },
        dealInformationDocuments: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              dealDocument: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['dealDocument'],
          },
        },
        behindWallDeal: {
          type: ['object', 'null'],
          required: ['detail', 'terms', 'isActive', 'documents'],
          properties: {
            detail: { type: ['string', 'null'] },
            terms: { type: ['string', 'null'] },
            isActive: { type: 'boolean' },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                required: ['dealDocument'],
                properties: {
                  dealDocument: {
                    type: 'object',
                    required: ['id', 'name'],
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                  },
                },
              },
            },
            investorsAgreedTerms: {
              type: 'array',
              items: {
                type: 'object',
                required: ['investorId'],
                properties: { investorId: { type: 'string' } },
              },
            },
          },
        },
        ipoDeal: {
          type: 'object',
          properties: {
            ipoPrice: { type: ['number', 'null'] },
            ipoRaiseAmount: { type: ['number', 'null'] },
            hasLeadBroker: { type: 'boolean' },
            brokerName: { type: ['string', 'null'] },
            listingDate: { format: 'date-time', type: ['string', 'null'] },
            closeDate: { format: 'date-time', type: ['string', 'null'] },
            marketCap: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['TermSheets', 'IpoPresentation', 'IpoProspectus'],
                    description: '`TermSheets` `IpoPresentation` `IpoProspectus`',
                  },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['ipoRaiseAmount', 'summary', 'documents'],
        },
        unlistedDeal: {
          type: 'object',
          properties: {
            preIpoPrice: { type: 'number' },
            preIpoRaiseAmount: { type: 'number' },
            hasLeadBroker: { type: 'boolean' },
            brokerName: { type: ['string', 'null'] },
            closeDate: { format: 'date-time', type: ['string', 'null'] },
            valuation: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['TermSheets', 'PreIpoPresentation'],
                    description: '`TermSheets` `PreIpoPresentation`',
                  },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['preIpoPrice', 'preIpoRaiseAmount', 'valueToBroker', 'summary', 'documents'],
        },
        placementDeal: {
          type: 'object',
          properties: {
            capitalRaisePrice: { type: 'number' },
            optionCode: { type: ['string', 'null'] },
            lastTradedPrice: { type: ['number', 'null'] },
            marketCap: { type: ['number', 'null'] },
            discountPercentage: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: { type: 'string', enum: ['TermSheets'], description: '`TermSheets`' },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['capitalRaisePrice', 'summary', 'documents'],
        },
        marketPlacementDeal: {
          type: 'object',
          properties: { lastTradedPrice: { type: ['number', 'null'] } },
          required: ['lastTradedPrice'],
        },
        dealInvestorGroups: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              investorGroup: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['investorGroup'],
          },
        },
        logs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              event: {
                type: 'string',
                enum: ['DealCreated', 'BidPlaced', 'BidsClosed', 'DealComplete'],
                description: '`DealCreated` `BidPlaced` `BidsClosed` `DealComplete`',
              },
              id: { type: 'string' },
              createdAt: { format: 'date-time', type: 'string' },
            },
            required: ['event', 'id', 'createdAt'],
          },
        },
        bids: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              dealId: { type: 'string' },
              entityBids: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    investmentAmount: { type: 'number' },
                    investorEntityId: { type: 'string' },
                    isAllocated: { type: 'boolean' },
                  },
                  required: ['investmentAmount', 'investorEntityId', 'isAllocated'],
                },
              },
            },
            required: ['id', 'dealId', 'entityBids'],
          },
        },
        allocation: {
          type: ['object', 'null'],
          required: [
            'receivedAmount',
            'brokerName',
            'isVisible',
            'isHotAllocation',
            'keyDate',
            'settlement',
            'dualTranche',
          ],
          properties: {
            receivedAmount: { type: 'number' },
            brokerName: { type: 'string' },
            isVisible: { type: 'boolean' },
            isHotAllocation: { type: 'boolean' },
            keyDate: {
              type: 'object',
              required: ['settlementDate', 'acceptanceDate', 'allotmentDate'],
              properties: {
                settlementDate: { format: 'date-time', type: 'string' },
                acceptanceDate: { format: 'date-time', type: 'string' },
                allotmentDate: { format: 'date-time', type: 'string' },
              },
            },
            settlement: {
              type: 'object',
              required: ['type', 'dvpDetail', 'transferDetail'],
              properties: {
                type: {
                  type: 'string',
                  enum: ['Dvp', 'FundTransfer', 'InternalTransfer'],
                  description: '`Dvp` `FundTransfer` `InternalTransfer`',
                },
                dvpDetail: {
                  type: ['object', 'null'],
                  required: ['code', 'isin'],
                  properties: { code: { type: 'string' }, isin: { type: 'string' } },
                },
                transferDetail: {
                  type: ['object', 'null'],
                  required: ['paymentDueDate', 'detail'],
                  properties: {
                    paymentDueDate: { format: 'date-time', type: 'string' },
                    detail: { type: ['string', 'null'] },
                  },
                },
              },
            },
            dualTranche: {
              type: 'object',
              required: ['firstTranche', 'secondTranche'],
              properties: { firstTranche: { type: 'number' }, secondTranche: { type: 'number' } },
            },
          },
        },
      },
      required: [
        'type',
        'id',
        'createdAt',
        'number',
        'isActive',
        'company',
        'dealInformationDocuments',
        'dealInvestorGroups',
        'bids',
        'allocation',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminDealCreate = {
  body: {
    type: 'object',
    properties: {
      type: { type: 'string', enum: ['Placement', 'MarketPlacement', 'Ipo', 'UnlistedInvestment'] },
      companyId: { type: 'string' },
      behindWallDeal: {
        type: 'object',
        properties: {
          documents: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                dealDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['dealDocument'],
            },
          },
          detail: { type: ['string', 'null'] },
          terms: { type: ['string', 'null'] },
        },
        required: ['detail', 'terms'],
      },
      dealInformationDocuments: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            dealDocument: {
              type: 'object',
              properties: { name: { type: 'string' } },
              required: ['name'],
            },
          },
          required: ['dealDocument'],
        },
      },
      ipoDeal: {
        type: 'object',
        properties: {
          ipoPrice: { type: ['number', 'null'] },
          ipoRaiseAmount: { type: ['number', 'null'] },
          hasLeadBroker: { type: 'boolean' },
          brokerName: { type: ['string', 'null'] },
          listingDate: { format: 'date-time', type: ['string', 'null'] },
          closeDate: { format: 'date-time', type: ['string', 'null'] },
          marketCap: { type: ['number', 'null'] },
          dealOption: {
            type: 'object',
            properties: {
              exercisePrice: { type: ['number', 'null'] },
              numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
              denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
              expiresAt: { format: 'date-time', type: ['string', 'null'] },
              detail: { type: ['string', 'null'] },
            },
            required: ['exercisePrice', 'numerator', 'denominator', 'expiresAt', 'detail'],
          },
          extraDetail: {
            type: 'object',
            properties: {
              minimumBid: { type: ['number', 'null'] },
              id: { type: 'string' },
              companyDescription: { type: ['string', 'null'] },
              investmentHighlights: { type: ['string', 'null'] },
              summaryContinued: { type: ['string', 'null'] },
              useProceeds: { type: ['string', 'null'] },
            },
            required: [
              'minimumBid',
              'id',
              'companyDescription',
              'investmentHighlights',
              'summaryContinued',
              'useProceeds',
            ],
          },
          keyDate: {
            type: 'object',
            properties: {
              bidDate: { format: 'date-time', type: ['string', 'null'] },
              bidTime: { format: 'date-time', type: ['string', 'null'] },
              settlementDate: { format: 'date-time', type: ['string', 'null'] },
            },
            required: ['bidDate', 'bidTime', 'settlementDate'],
          },
          documents: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                type: { type: 'string', enum: ['TermSheets', 'IpoPresentation', 'IpoProspectus'] },
                dealDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['type', 'dealDocument'],
            },
          },
          summary: { type: ['string', 'null'] },
        },
        required: ['ipoRaiseAmount', 'summary'],
      },
      unlistedDeal: {
        type: 'object',
        properties: {
          preIpoPrice: { type: 'number' },
          preIpoRaiseAmount: { type: 'number' },
          hasLeadBroker: { type: 'boolean' },
          brokerName: { type: ['string', 'null'] },
          closeDate: { format: 'date-time', type: ['string', 'null'] },
          valuation: { type: ['number', 'null'] },
          dealOption: {
            type: 'object',
            properties: {
              exercisePrice: { type: ['number', 'null'] },
              numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
              denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
              expiresAt: { format: 'date-time', type: ['string', 'null'] },
              detail: { type: ['string', 'null'] },
            },
            required: ['exercisePrice', 'numerator', 'denominator', 'expiresAt', 'detail'],
          },
          extraDetail: {
            type: 'object',
            properties: {
              minimumBid: { type: ['number', 'null'] },
              companyDescription: { type: ['string', 'null'] },
              investmentHighlights: { type: ['string', 'null'] },
              summaryContinued: { type: ['string', 'null'] },
              useProceeds: { type: ['string', 'null'] },
            },
            required: [
              'minimumBid',
              'companyDescription',
              'investmentHighlights',
              'summaryContinued',
              'useProceeds',
            ],
          },
          keyDate: {
            type: 'object',
            properties: {
              bidDate: { format: 'date-time', type: ['string', 'null'] },
              bidTime: { format: 'date-time', type: ['string', 'null'] },
              settlementDate: { format: 'date-time', type: ['string', 'null'] },
            },
            required: ['bidDate', 'bidTime', 'settlementDate'],
          },
          documents: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                type: { type: 'string', enum: ['TermSheets', 'PreIpoPresentation'] },
                dealDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['type', 'dealDocument'],
            },
          },
          summary: { type: ['string', 'null'] },
        },
        required: ['preIpoPrice', 'preIpoRaiseAmount', 'summary'],
      },
      placementDeal: {
        type: 'object',
        properties: {
          capitalRaisePrice: { type: 'number' },
          optionCode: { type: ['string', 'null'] },
          lastTradedPrice: { type: ['number', 'null'] },
          marketCap: { type: ['number', 'null'] },
          discountPercentage: { type: ['number', 'null'] },
          dealOption: {
            type: 'object',
            properties: {
              exercisePrice: { type: ['number', 'null'] },
              numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
              denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
              expiresAt: { format: 'date-time', type: ['string', 'null'] },
              detail: { type: ['string', 'null'] },
            },
            required: ['exercisePrice', 'numerator', 'denominator', 'expiresAt', 'detail'],
          },
          extraDetail: {
            type: 'object',
            properties: {
              minimumBid: { type: ['number', 'null'] },
              companyDescription: { type: ['string', 'null'] },
              investmentHighlights: { type: ['string', 'null'] },
              summaryContinued: { type: ['string', 'null'] },
              useProceeds: { type: ['string', 'null'] },
            },
            required: [
              'minimumBid',
              'companyDescription',
              'investmentHighlights',
              'summaryContinued',
              'useProceeds',
            ],
          },
          keyDate: {
            type: 'object',
            properties: {
              bidDate: { format: 'date-time', type: ['string', 'null'] },
              bidTime: { format: 'date-time', type: ['string', 'null'] },
              settlementDate: { format: 'date-time', type: ['string', 'null'] },
            },
            required: ['bidDate', 'bidTime', 'settlementDate'],
          },
          documents: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                type: { type: 'string', enum: ['TermSheets'] },
                dealDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['type', 'dealDocument'],
            },
          },
          summary: { type: ['string', 'null'] },
        },
        required: ['capitalRaisePrice', 'summary'],
      },
      marketPlacementDeal: {
        type: 'object',
        properties: { lastTradedPrice: { type: ['number', 'null'] } },
        required: ['lastTradedPrice'],
      },
      dealInvestorGroups: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            investorGroup: {
              type: 'object',
              properties: { id: { type: 'string' } },
              required: ['id'],
            },
          },
          required: ['investorGroup'],
        },
      },
      isActive: { type: 'boolean' },
    },
    required: ['type', 'companyId', 'isActive'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['Placement', 'MarketPlacement', 'Ipo', 'UnlistedInvestment'],
          description: '`Placement` `MarketPlacement` `Ipo` `UnlistedInvestment`',
        },
        id: { type: 'string' },
        createdAt: { format: 'date-time', type: 'string' },
        number: { type: 'string' },
        isActive: { type: 'boolean' },
        company: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            industry: { type: 'string' },
            logo: { type: ['string', 'null'] },
            asxCompany: {
              type: 'object',
              properties: { code: { type: 'string' } },
              required: ['code'],
            },
          },
          required: ['id', 'name', 'industry', 'logo', 'asxCompany'],
        },
        dealInformationDocuments: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              dealDocument: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['dealDocument'],
          },
        },
        behindWallDeal: {
          type: ['object', 'null'],
          required: ['detail', 'terms', 'isActive', 'documents'],
          properties: {
            detail: { type: ['string', 'null'] },
            terms: { type: ['string', 'null'] },
            isActive: { type: 'boolean' },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                required: ['dealDocument'],
                properties: {
                  dealDocument: {
                    type: 'object',
                    required: ['id', 'name'],
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                  },
                },
              },
            },
            investorsAgreedTerms: {
              type: 'array',
              items: {
                type: 'object',
                required: ['investorId'],
                properties: { investorId: { type: 'string' } },
              },
            },
          },
        },
        ipoDeal: {
          type: 'object',
          properties: {
            ipoPrice: { type: ['number', 'null'] },
            ipoRaiseAmount: { type: ['number', 'null'] },
            hasLeadBroker: { type: 'boolean' },
            brokerName: { type: ['string', 'null'] },
            listingDate: { format: 'date-time', type: ['string', 'null'] },
            closeDate: { format: 'date-time', type: ['string', 'null'] },
            marketCap: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['TermSheets', 'IpoPresentation', 'IpoProspectus'],
                    description: '`TermSheets` `IpoPresentation` `IpoProspectus`',
                  },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['ipoRaiseAmount', 'summary', 'documents'],
        },
        unlistedDeal: {
          type: 'object',
          properties: {
            preIpoPrice: { type: 'number' },
            preIpoRaiseAmount: { type: 'number' },
            hasLeadBroker: { type: 'boolean' },
            brokerName: { type: ['string', 'null'] },
            closeDate: { format: 'date-time', type: ['string', 'null'] },
            valuation: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['TermSheets', 'PreIpoPresentation'],
                    description: '`TermSheets` `PreIpoPresentation`',
                  },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['preIpoPrice', 'preIpoRaiseAmount', 'valueToBroker', 'summary', 'documents'],
        },
        placementDeal: {
          type: 'object',
          properties: {
            capitalRaisePrice: { type: 'number' },
            optionCode: { type: ['string', 'null'] },
            lastTradedPrice: { type: ['number', 'null'] },
            marketCap: { type: ['number', 'null'] },
            discountPercentage: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: { type: 'string', enum: ['TermSheets'], description: '`TermSheets`' },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['capitalRaisePrice', 'summary', 'documents'],
        },
        marketPlacementDeal: {
          type: 'object',
          properties: { lastTradedPrice: { type: ['number', 'null'] } },
          required: ['lastTradedPrice'],
        },
        dealInvestorGroups: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              investorGroup: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['investorGroup'],
          },
        },
        logs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              event: {
                type: 'string',
                enum: ['DealCreated', 'BidPlaced', 'BidsClosed', 'DealComplete'],
                description: '`DealCreated` `BidPlaced` `BidsClosed` `DealComplete`',
              },
              id: { type: 'string' },
              createdAt: { format: 'date-time', type: 'string' },
            },
            required: ['event', 'id', 'createdAt'],
          },
        },
        bids: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              dealId: { type: 'string' },
              entityBids: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    investmentAmount: { type: 'number' },
                    investorEntityId: { type: 'string' },
                    isAllocated: { type: 'boolean' },
                  },
                  required: ['investmentAmount', 'investorEntityId', 'isAllocated'],
                },
              },
            },
            required: ['id', 'dealId', 'entityBids'],
          },
        },
        allocation: {
          type: ['object', 'null'],
          required: [
            'receivedAmount',
            'brokerName',
            'isVisible',
            'isHotAllocation',
            'keyDate',
            'settlement',
            'dualTranche',
          ],
          properties: {
            receivedAmount: { type: 'number' },
            brokerName: { type: 'string' },
            isVisible: { type: 'boolean' },
            isHotAllocation: { type: 'boolean' },
            keyDate: {
              type: 'object',
              required: ['settlementDate', 'acceptanceDate', 'allotmentDate'],
              properties: {
                settlementDate: { format: 'date-time', type: 'string' },
                acceptanceDate: { format: 'date-time', type: 'string' },
                allotmentDate: { format: 'date-time', type: 'string' },
              },
            },
            settlement: {
              type: 'object',
              required: ['type', 'dvpDetail', 'transferDetail'],
              properties: {
                type: {
                  type: 'string',
                  enum: ['Dvp', 'FundTransfer', 'InternalTransfer'],
                  description: '`Dvp` `FundTransfer` `InternalTransfer`',
                },
                dvpDetail: {
                  type: ['object', 'null'],
                  required: ['code', 'isin'],
                  properties: { code: { type: 'string' }, isin: { type: 'string' } },
                },
                transferDetail: {
                  type: ['object', 'null'],
                  required: ['paymentDueDate', 'detail'],
                  properties: {
                    paymentDueDate: { format: 'date-time', type: 'string' },
                    detail: { type: ['string', 'null'] },
                  },
                },
              },
            },
            dualTranche: {
              type: 'object',
              required: ['firstTranche', 'secondTranche'],
              properties: { firstTranche: { type: 'number' }, secondTranche: { type: 'number' } },
            },
          },
        },
      },
      required: [
        'type',
        'id',
        'createdAt',
        'number',
        'isActive',
        'company',
        'dealInformationDocuments',
        'dealInvestorGroups',
        'bids',
        'allocation',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminDealGetById = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['dealId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['Placement', 'MarketPlacement', 'Ipo', 'UnlistedInvestment'],
          description: '`Placement` `MarketPlacement` `Ipo` `UnlistedInvestment`',
        },
        id: { type: 'string' },
        createdAt: { format: 'date-time', type: 'string' },
        number: { type: 'string' },
        isActive: { type: 'boolean' },
        company: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            industry: { type: 'string' },
            logo: { type: ['string', 'null'] },
            asxCompany: {
              type: 'object',
              properties: { code: { type: 'string' } },
              required: ['code'],
            },
          },
          required: ['id', 'name', 'industry', 'logo', 'asxCompany'],
        },
        dealInformationDocuments: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              dealDocument: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['dealDocument'],
          },
        },
        behindWallDeal: {
          type: ['object', 'null'],
          required: ['detail', 'terms', 'isActive', 'documents'],
          properties: {
            detail: { type: ['string', 'null'] },
            terms: { type: ['string', 'null'] },
            isActive: { type: 'boolean' },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                required: ['dealDocument'],
                properties: {
                  dealDocument: {
                    type: 'object',
                    required: ['id', 'name'],
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                  },
                },
              },
            },
            investorsAgreedTerms: {
              type: 'array',
              items: {
                type: 'object',
                required: ['investorId'],
                properties: { investorId: { type: 'string' } },
              },
            },
          },
        },
        ipoDeal: {
          type: 'object',
          properties: {
            ipoPrice: { type: ['number', 'null'] },
            ipoRaiseAmount: { type: ['number', 'null'] },
            hasLeadBroker: { type: 'boolean' },
            brokerName: { type: ['string', 'null'] },
            listingDate: { format: 'date-time', type: ['string', 'null'] },
            closeDate: { format: 'date-time', type: ['string', 'null'] },
            marketCap: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['TermSheets', 'IpoPresentation', 'IpoProspectus'],
                    description: '`TermSheets` `IpoPresentation` `IpoProspectus`',
                  },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['ipoRaiseAmount', 'summary', 'documents'],
        },
        unlistedDeal: {
          type: 'object',
          properties: {
            preIpoPrice: { type: 'number' },
            preIpoRaiseAmount: { type: 'number' },
            hasLeadBroker: { type: 'boolean' },
            brokerName: { type: ['string', 'null'] },
            closeDate: { format: 'date-time', type: ['string', 'null'] },
            valuation: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['TermSheets', 'PreIpoPresentation'],
                    description: '`TermSheets` `PreIpoPresentation`',
                  },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['preIpoPrice', 'preIpoRaiseAmount', 'valueToBroker', 'summary', 'documents'],
        },
        placementDeal: {
          type: 'object',
          properties: {
            capitalRaisePrice: { type: 'number' },
            optionCode: { type: ['string', 'null'] },
            lastTradedPrice: { type: ['number', 'null'] },
            marketCap: { type: ['number', 'null'] },
            discountPercentage: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: { type: 'string', enum: ['TermSheets'], description: '`TermSheets`' },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['capitalRaisePrice', 'summary', 'documents'],
        },
        marketPlacementDeal: {
          type: 'object',
          properties: { lastTradedPrice: { type: ['number', 'null'] } },
          required: ['lastTradedPrice'],
        },
        dealInvestorGroups: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              investorGroup: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['investorGroup'],
          },
        },
        logs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              event: {
                type: 'string',
                enum: ['DealCreated', 'BidPlaced', 'BidsClosed', 'DealComplete'],
                description: '`DealCreated` `BidPlaced` `BidsClosed` `DealComplete`',
              },
              id: { type: 'string' },
              createdAt: { format: 'date-time', type: 'string' },
            },
            required: ['event', 'id', 'createdAt'],
          },
        },
        bids: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              dealId: { type: 'string' },
              entityBids: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    investmentAmount: { type: 'number' },
                    investorEntityId: { type: 'string' },
                    isAllocated: { type: 'boolean' },
                  },
                  required: ['investmentAmount', 'investorEntityId', 'isAllocated'],
                },
              },
            },
            required: ['id', 'dealId', 'entityBids'],
          },
        },
        allocation: {
          type: ['object', 'null'],
          required: [
            'receivedAmount',
            'brokerName',
            'isVisible',
            'isHotAllocation',
            'keyDate',
            'settlement',
            'dualTranche',
          ],
          properties: {
            receivedAmount: { type: 'number' },
            brokerName: { type: 'string' },
            isVisible: { type: 'boolean' },
            isHotAllocation: { type: 'boolean' },
            keyDate: {
              type: 'object',
              required: ['settlementDate', 'acceptanceDate', 'allotmentDate'],
              properties: {
                settlementDate: { format: 'date-time', type: 'string' },
                acceptanceDate: { format: 'date-time', type: 'string' },
                allotmentDate: { format: 'date-time', type: 'string' },
              },
            },
            settlement: {
              type: 'object',
              required: ['type', 'dvpDetail', 'transferDetail'],
              properties: {
                type: {
                  type: 'string',
                  enum: ['Dvp', 'FundTransfer', 'InternalTransfer'],
                  description: '`Dvp` `FundTransfer` `InternalTransfer`',
                },
                dvpDetail: {
                  type: ['object', 'null'],
                  required: ['code', 'isin'],
                  properties: { code: { type: 'string' }, isin: { type: 'string' } },
                },
                transferDetail: {
                  type: ['object', 'null'],
                  required: ['paymentDueDate', 'detail'],
                  properties: {
                    paymentDueDate: { format: 'date-time', type: 'string' },
                    detail: { type: ['string', 'null'] },
                  },
                },
              },
            },
            dualTranche: {
              type: 'object',
              required: ['firstTranche', 'secondTranche'],
              properties: { firstTranche: { type: 'number' }, secondTranche: { type: 'number' } },
            },
          },
        },
      },
      required: [
        'type',
        'id',
        'createdAt',
        'number',
        'isActive',
        'company',
        'dealInformationDocuments',
        'dealInvestorGroups',
        'bids',
        'allocation',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminDealList = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          companyId: {
            format: 'uuid',
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the company to retrieve all its deals',
          },
          filter: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Search by company name',
          },
          type: {
            enum: ['Placement', 'MarketPlacement', 'Ipo', 'UnlistedInvestment'],
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for only the specified deal type',
          },
          investorId: {
            format: 'uuid',
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the investor',
          },
          hasBidden: {
            type: 'boolean',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for deals whether they have been bidden by the investor. It is applied with "investorId" filter',
          },
          isInterestedBidder: {
            type: 'boolean',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Returns all deals that the investor is interested in. It is applied with "investorId" filter',
          },
          page: { minimum: 1, type: 'number', $schema: 'http://json-schema.org/draft-04/schema#' },
          perPage: {
            minimum: 1,
            type: 'number',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: ['page', 'perPage'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                enum: ['Placement', 'MarketPlacement', 'Ipo', 'UnlistedInvestment'],
                description: '`Placement` `MarketPlacement` `Ipo` `UnlistedInvestment`',
              },
              behindWallDeal: {
                type: 'object',
                properties: {
                  detail: { type: ['string', 'null'] },
                  terms: { type: ['string', 'null'] },
                  isActive: { type: 'boolean' },
                },
                required: ['detail', 'terms', 'isActive'],
              },
              id: { type: 'string' },
              createdAt: { format: 'date-time', type: 'string' },
              number: { type: 'string' },
              isActive: { type: 'boolean' },
              company: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                  industry: { type: 'string' },
                  logo: { type: ['string', 'null'] },
                  asxCompany: {
                    type: 'object',
                    properties: { code: { type: 'string' } },
                    required: ['code'],
                  },
                },
                required: ['id', 'name', 'industry', 'logo', 'asxCompany'],
              },
              logs: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    event: {
                      type: 'string',
                      enum: ['DealCreated', 'BidPlaced', 'BidsClosed', 'DealComplete'],
                      description: '`DealCreated` `BidPlaced` `BidsClosed` `DealComplete`',
                    },
                    id: { type: 'string' },
                    createdAt: { format: 'date-time', type: 'string' },
                  },
                  required: ['event', 'id', 'createdAt'],
                },
              },
              bids: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'string' },
                    dealId: { type: 'string' },
                    entityBids: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          investmentAmount: { type: 'number' },
                          investorEntityId: { type: 'string' },
                          isAllocated: { type: 'boolean' },
                        },
                        required: ['investmentAmount', 'investorEntityId', 'isAllocated'],
                      },
                    },
                  },
                  required: ['id', 'dealId', 'entityBids'],
                },
              },
              allocation: {
                type: ['object', 'null'],
                required: [
                  'receivedAmount',
                  'brokerName',
                  'isVisible',
                  'isHotAllocation',
                  'keyDate',
                  'settlement',
                  'dualTranche',
                ],
                properties: {
                  receivedAmount: { type: 'number' },
                  brokerName: { type: 'string' },
                  isVisible: { type: 'boolean' },
                  isHotAllocation: { type: 'boolean' },
                  keyDate: {
                    type: 'object',
                    required: ['settlementDate', 'acceptanceDate', 'allotmentDate'],
                    properties: {
                      settlementDate: { format: 'date-time', type: 'string' },
                      acceptanceDate: { format: 'date-time', type: 'string' },
                      allotmentDate: { format: 'date-time', type: 'string' },
                    },
                  },
                  settlement: {
                    type: 'object',
                    required: ['type', 'dvpDetail', 'transferDetail'],
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['Dvp', 'FundTransfer', 'InternalTransfer'],
                        description: '`Dvp` `FundTransfer` `InternalTransfer`',
                      },
                      dvpDetail: {
                        type: ['object', 'null'],
                        required: ['code', 'isin'],
                        properties: { code: { type: 'string' }, isin: { type: 'string' } },
                      },
                      transferDetail: {
                        type: ['object', 'null'],
                        required: ['paymentDueDate', 'detail'],
                        properties: {
                          paymentDueDate: { format: 'date-time', type: 'string' },
                          detail: { type: ['string', 'null'] },
                        },
                      },
                    },
                  },
                  dualTranche: {
                    type: 'object',
                    required: ['firstTranche', 'secondTranche'],
                    properties: {
                      firstTranche: { type: 'number' },
                      secondTranche: { type: 'number' },
                    },
                  },
                },
              },
            },
            required: [
              'type',
              'behindWallDeal',
              'id',
              'createdAt',
              'number',
              'isActive',
              'company',
              'bids',
              'allocation',
            ],
          },
        },
        pagination: {
          type: 'object',
          properties: {
            total: { type: 'number' },
            lastPage: { type: 'number' },
            currentPage: { type: 'number' },
            perPage: { type: 'number' },
            from: { type: 'number' },
            to: { type: 'number' },
          },
          required: ['total', 'lastPage', 'currentPage', 'perPage', 'from', 'to'],
        },
      },
      required: ['data', 'pagination'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminDealLogList = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['dealId'],
      },
      {
        type: 'object',
        properties: {
          page: { minimum: 1, type: 'number', $schema: 'http://json-schema.org/draft-04/schema#' },
          perPage: {
            minimum: 1,
            type: 'number',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: ['page', 'perPage'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              event: {
                type: 'string',
                enum: ['DealCreated', 'BidPlaced', 'BidsClosed', 'DealComplete'],
                description: '`DealCreated` `BidPlaced` `BidsClosed` `DealComplete`',
              },
              id: { type: 'string' },
              dealId: { type: 'string' },
              createdAt: { format: 'date-time', type: 'string' },
              placeLog: {
                type: ['object', 'null'],
                required: ['bid'],
                properties: {
                  bid: {
                    type: 'object',
                    required: ['id', 'dealId'],
                    properties: { id: { type: 'string' }, dealId: { type: 'string' } },
                  },
                },
              },
            },
            required: ['event', 'id', 'dealId', 'createdAt', 'placeLog'],
          },
        },
        pagination: {
          type: 'object',
          properties: {
            total: { type: 'number' },
            lastPage: { type: 'number' },
            currentPage: { type: 'number' },
            perPage: { type: 'number' },
            from: { type: 'number' },
            to: { type: 'number' },
          },
          required: ['total', 'lastPage', 'currentPage', 'perPage', 'from', 'to'],
        },
      },
      required: ['data', 'pagination'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminDealUpdate = {
  body: {
    type: 'object',
    properties: {
      type: { type: 'string', enum: ['Placement', 'MarketPlacement', 'Ipo', 'UnlistedInvestment'] },
      behindWallDeal: {
        description: 'It is not possible to delete or change a deal to "behind the wall"',
        type: 'object',
        properties: {
          documents: {
            type: 'array',
            items: {
              type: 'object',
              required: ['dealDocument'],
              properties: {
                dealDocument: {
                  type: 'object',
                  required: ['name'],
                  properties: { name: { type: 'string' } },
                },
              },
            },
          },
          detail: { type: ['string', 'null'] },
          terms: { type: ['string', 'null'] },
          isActive: { type: 'boolean' },
        },
      },
      companyId: { type: 'string' },
      dealInformationDocuments: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            dealDocument: {
              type: 'object',
              properties: { name: { type: 'string' } },
              required: ['name'],
            },
          },
          required: ['dealDocument'],
        },
      },
      dealInvestorGroups: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            investorGroup: {
              type: 'object',
              properties: { id: { type: 'string' } },
              required: ['id'],
            },
          },
          required: ['investorGroup'],
        },
      },
      ipoDeal: {
        type: 'object',
        properties: {
          ipoPrice: { type: ['number', 'null'] },
          ipoRaiseAmount: { type: ['number', 'null'] },
          hasLeadBroker: { type: 'boolean' },
          brokerName: { type: ['string', 'null'] },
          listingDate: { format: 'date-time', type: ['string', 'null'] },
          closeDate: { format: 'date-time', type: ['string', 'null'] },
          marketCap: { type: ['number', 'null'] },
          valueToBroker: { type: 'number' },
          dealOption: {
            type: 'object',
            properties: {
              exercisePrice: { type: ['number', 'null'] },
              numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
              denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
              expiresAt: { format: 'date-time', type: ['string', 'null'] },
              detail: { type: ['string', 'null'] },
            },
          },
          extraDetail: {
            type: 'object',
            properties: {
              minimumBid: { type: ['number', 'null'] },
              companyDescription: { type: ['string', 'null'] },
              investmentHighlights: { type: ['string', 'null'] },
              summaryContinued: { type: ['string', 'null'] },
              useProceeds: { type: ['string', 'null'] },
            },
          },
          keyDate: {
            type: 'object',
            properties: {
              bidDate: { format: 'date-time', type: ['string', 'null'] },
              bidTime: { format: 'date-time', type: ['string', 'null'] },
              settlementDate: { format: 'date-time', type: ['string', 'null'] },
            },
          },
          documents: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                type: { type: 'string', enum: ['TermSheets', 'IpoPresentation', 'IpoProspectus'] },
                dealDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['type', 'dealDocument'],
            },
          },
          summary: { type: ['string', 'null'] },
        },
      },
      placementDeal: {
        type: 'object',
        properties: {
          capitalRaisePrice: { type: 'number' },
          optionCode: { type: ['string', 'null'] },
          lastTradedPrice: { type: ['number', 'null'] },
          marketCap: { type: ['number', 'null'] },
          discountPercentage: { type: ['number', 'null'] },
          valueToBroker: { type: 'number' },
          dealOption: {
            type: 'object',
            properties: {
              exercisePrice: { type: ['number', 'null'] },
              numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
              denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
              expiresAt: { format: 'date-time', type: ['string', 'null'] },
              detail: { type: ['string', 'null'] },
            },
          },
          extraDetail: {
            type: 'object',
            properties: {
              minimumBid: { type: ['number', 'null'] },
              companyDescription: { type: ['string', 'null'] },
              investmentHighlights: { type: ['string', 'null'] },
              summaryContinued: { type: ['string', 'null'] },
              useProceeds: { type: ['string', 'null'] },
            },
          },
          keyDate: {
            type: 'object',
            properties: {
              bidDate: { format: 'date-time', type: ['string', 'null'] },
              bidTime: { format: 'date-time', type: ['string', 'null'] },
              settlementDate: { format: 'date-time', type: ['string', 'null'] },
            },
          },
          documents: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                type: { type: 'string', enum: ['TermSheets'] },
                dealDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['type', 'dealDocument'],
            },
          },
          summary: { type: ['string', 'null'] },
        },
      },
      unlistedDeal: {
        type: 'object',
        properties: {
          preIpoPrice: { type: 'number' },
          preIpoRaiseAmount: { type: 'number' },
          hasLeadBroker: { type: 'boolean' },
          brokerName: { type: ['string', 'null'] },
          closeDate: { format: 'date-time', type: ['string', 'null'] },
          valuation: { type: ['number', 'null'] },
          valueToBroker: { type: 'number' },
          dealOption: {
            type: 'object',
            properties: {
              exercisePrice: { type: ['number', 'null'] },
              numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
              denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
              expiresAt: { format: 'date-time', type: ['string', 'null'] },
              detail: { type: ['string', 'null'] },
            },
          },
          extraDetail: {
            type: 'object',
            properties: {
              minimumBid: { type: ['number', 'null'] },
              companyDescription: { type: ['string', 'null'] },
              investmentHighlights: { type: ['string', 'null'] },
              summaryContinued: { type: ['string', 'null'] },
              useProceeds: { type: ['string', 'null'] },
            },
          },
          keyDate: {
            type: 'object',
            properties: {
              bidDate: { format: 'date-time', type: ['string', 'null'] },
              bidTime: { format: 'date-time', type: ['string', 'null'] },
              settlementDate: { format: 'date-time', type: ['string', 'null'] },
            },
          },
          documents: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                type: { type: 'string', enum: ['TermSheets', 'PreIpoPresentation'] },
                dealDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['type', 'dealDocument'],
            },
          },
          summary: { type: ['string', 'null'] },
        },
      },
      marketPlacementDeal: {
        type: 'object',
        properties: { lastTradedPrice: { type: ['number', 'null'] } },
      },
      isActive: { type: 'boolean' },
    },
    required: ['type'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['dealId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['Placement', 'MarketPlacement', 'Ipo', 'UnlistedInvestment'],
          description: '`Placement` `MarketPlacement` `Ipo` `UnlistedInvestment`',
        },
        id: { type: 'string' },
        createdAt: { format: 'date-time', type: 'string' },
        number: { type: 'string' },
        isActive: { type: 'boolean' },
        company: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            industry: { type: 'string' },
            logo: { type: ['string', 'null'] },
            asxCompany: {
              type: 'object',
              properties: { code: { type: 'string' } },
              required: ['code'],
            },
          },
          required: ['id', 'name', 'industry', 'logo', 'asxCompany'],
        },
        dealInformationDocuments: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              dealDocument: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['dealDocument'],
          },
        },
        behindWallDeal: {
          type: ['object', 'null'],
          required: ['detail', 'terms', 'isActive', 'documents'],
          properties: {
            detail: { type: ['string', 'null'] },
            terms: { type: ['string', 'null'] },
            isActive: { type: 'boolean' },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                required: ['dealDocument'],
                properties: {
                  dealDocument: {
                    type: 'object',
                    required: ['id', 'name'],
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                  },
                },
              },
            },
            investorsAgreedTerms: {
              type: 'array',
              items: {
                type: 'object',
                required: ['investorId'],
                properties: { investorId: { type: 'string' } },
              },
            },
          },
        },
        ipoDeal: {
          type: 'object',
          properties: {
            ipoPrice: { type: ['number', 'null'] },
            ipoRaiseAmount: { type: ['number', 'null'] },
            hasLeadBroker: { type: 'boolean' },
            brokerName: { type: ['string', 'null'] },
            listingDate: { format: 'date-time', type: ['string', 'null'] },
            closeDate: { format: 'date-time', type: ['string', 'null'] },
            marketCap: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['TermSheets', 'IpoPresentation', 'IpoProspectus'],
                    description: '`TermSheets` `IpoPresentation` `IpoProspectus`',
                  },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['ipoRaiseAmount', 'summary', 'documents'],
        },
        unlistedDeal: {
          type: 'object',
          properties: {
            preIpoPrice: { type: 'number' },
            preIpoRaiseAmount: { type: 'number' },
            hasLeadBroker: { type: 'boolean' },
            brokerName: { type: ['string', 'null'] },
            closeDate: { format: 'date-time', type: ['string', 'null'] },
            valuation: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['TermSheets', 'PreIpoPresentation'],
                    description: '`TermSheets` `PreIpoPresentation`',
                  },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['preIpoPrice', 'preIpoRaiseAmount', 'valueToBroker', 'summary', 'documents'],
        },
        placementDeal: {
          type: 'object',
          properties: {
            capitalRaisePrice: { type: 'number' },
            optionCode: { type: ['string', 'null'] },
            lastTradedPrice: { type: ['number', 'null'] },
            marketCap: { type: ['number', 'null'] },
            discountPercentage: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: { type: 'string', enum: ['TermSheets'], description: '`TermSheets`' },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['capitalRaisePrice', 'summary', 'documents'],
        },
        marketPlacementDeal: {
          type: 'object',
          properties: { lastTradedPrice: { type: ['number', 'null'] } },
          required: ['lastTradedPrice'],
        },
        dealInvestorGroups: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              investorGroup: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['investorGroup'],
          },
        },
        logs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              event: {
                type: 'string',
                enum: ['DealCreated', 'BidPlaced', 'BidsClosed', 'DealComplete'],
                description: '`DealCreated` `BidPlaced` `BidsClosed` `DealComplete`',
              },
              id: { type: 'string' },
              createdAt: { format: 'date-time', type: 'string' },
            },
            required: ['event', 'id', 'createdAt'],
          },
        },
        bids: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              dealId: { type: 'string' },
              entityBids: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    investmentAmount: { type: 'number' },
                    investorEntityId: { type: 'string' },
                    isAllocated: { type: 'boolean' },
                  },
                  required: ['investmentAmount', 'investorEntityId', 'isAllocated'],
                },
              },
            },
            required: ['id', 'dealId', 'entityBids'],
          },
        },
        allocation: {
          type: ['object', 'null'],
          required: [
            'receivedAmount',
            'brokerName',
            'isVisible',
            'isHotAllocation',
            'keyDate',
            'settlement',
            'dualTranche',
          ],
          properties: {
            receivedAmount: { type: 'number' },
            brokerName: { type: 'string' },
            isVisible: { type: 'boolean' },
            isHotAllocation: { type: 'boolean' },
            keyDate: {
              type: 'object',
              required: ['settlementDate', 'acceptanceDate', 'allotmentDate'],
              properties: {
                settlementDate: { format: 'date-time', type: 'string' },
                acceptanceDate: { format: 'date-time', type: 'string' },
                allotmentDate: { format: 'date-time', type: 'string' },
              },
            },
            settlement: {
              type: 'object',
              required: ['type', 'dvpDetail', 'transferDetail'],
              properties: {
                type: {
                  type: 'string',
                  enum: ['Dvp', 'FundTransfer', 'InternalTransfer'],
                  description: '`Dvp` `FundTransfer` `InternalTransfer`',
                },
                dvpDetail: {
                  type: ['object', 'null'],
                  required: ['code', 'isin'],
                  properties: { code: { type: 'string' }, isin: { type: 'string' } },
                },
                transferDetail: {
                  type: ['object', 'null'],
                  required: ['paymentDueDate', 'detail'],
                  properties: {
                    paymentDueDate: { format: 'date-time', type: 'string' },
                    detail: { type: ['string', 'null'] },
                  },
                },
              },
            },
            dualTranche: {
              type: 'object',
              required: ['firstTranche', 'secondTranche'],
              properties: { firstTranche: { type: 'number' }, secondTranche: { type: 'number' } },
            },
          },
        },
      },
      required: [
        'type',
        'id',
        'createdAt',
        'number',
        'isActive',
        'company',
        'dealInformationDocuments',
        'dealInvestorGroups',
        'bids',
        'allocation',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminIndividualInvestorAskForDocuments = {
  body: {
    type: 'object',
    properties: { siForm: { type: 'boolean' }, askIdentificationDocument: { type: 'boolean' } },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminIndividualInvestorChangeSiDocumentStatus = {
  body: {
    type: 'object',
    properties: {
      sophisticatedDocument: {
        type: 'object',
        properties: {
          document: {
            type: 'object',
            properties: { name: { type: 'string' } },
            required: ['name'],
          },
          expiresAt: { format: 'date-time', type: 'string' },
          isApproved: { type: 'boolean' },
        },
        required: ['document'],
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminInvestorEntityCreate = {
  body: {
    type: 'object',
    properties: {
      type: { type: 'string', enum: ['IndividualJoint', 'Company', 'SuperTrust'] },
      address: { type: 'string' },
      ccEmail: { type: 'string' },
      taxFile: { type: ['string', 'null'], minLength: 9 },
      finclearAccountNumber: { type: ['string', 'null'] },
      primaryCountry: { type: 'string' },
      dvp: {
        type: 'object',
        properties: { hin: { type: 'string' }, brokerPid: { type: 'string' } },
        required: ['hin', 'brokerPid'],
      },
      trustEntity: {
        type: 'object',
        properties: {
          deedDocuments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                investorEntityDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['investorEntityDocument'],
            },
          },
          uboList: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                identificationDocuments: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      investorEntityDocument: {
                        type: 'object',
                        properties: { name: { type: 'string' } },
                        required: ['name'],
                      },
                    },
                    required: ['investorEntityDocument'],
                  },
                },
                name: { type: 'string' },
                birthday: { format: 'date-time', type: 'string' },
                countryBirth: { type: 'string' },
              },
              required: ['identificationDocuments', 'name', 'birthday', 'countryBirth'],
            },
          },
          type: { type: 'string' },
          name: { type: 'string' },
          tradingName: { type: 'string' },
          accountDesignation: { type: ['string', 'null'] },
          abnNumber: { type: 'string' },
        },
        required: [
          'deedDocuments',
          'uboList',
          'type',
          'name',
          'tradingName',
          'accountDesignation',
          'abnNumber',
        ],
      },
      individualEntity: {
        type: 'object',
        properties: {
          identificationDocuments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                investorEntityDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['investorEntityDocument'],
            },
          },
          title: { type: 'string' },
          name: { type: 'string' },
          middleName: { type: ['string', 'null'] },
          surname: { type: 'string' },
          birthday: { format: 'date-time', type: 'string' },
          countryPassport: { type: 'string' },
        },
        required: [
          'identificationDocuments',
          'title',
          'name',
          'middleName',
          'surname',
          'birthday',
          'countryPassport',
        ],
      },
      companyEntity: {
        type: 'object',
        properties: {
          type: { type: 'string', enum: ['Proprietary', 'Public', 'Private'] },
          extractDocuments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                investorEntityDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['investorEntityDocument'],
            },
          },
          directorDetail: {
            type: 'object',
            properties: {
              identificationDocuments: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    investorEntityDocument: {
                      type: 'object',
                      properties: { name: { type: 'string' } },
                      required: ['name'],
                    },
                  },
                  required: ['investorEntityDocument'],
                },
              },
              name: { type: 'string' },
              birthday: { format: 'date-time', type: 'string' },
              countryBirth: { type: 'string' },
            },
            required: ['identificationDocuments', 'name', 'birthday', 'countryBirth'],
          },
          name: { type: 'string' },
          tradingName: { type: 'string' },
          accountDesignation: { type: ['string', 'null'] },
          abnNumber: { type: 'string' },
        },
        required: [
          'type',
          'extractDocuments',
          'directorDetail',
          'name',
          'tradingName',
          'accountDesignation',
          'abnNumber',
        ],
      },
    },
    required: [
      'type',
      'address',
      'ccEmail',
      'taxFile',
      'finclearAccountNumber',
      'primaryCountry',
      'dvp',
    ],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['IndividualJoint', 'Company', 'SuperTrust'],
          description: '`IndividualJoint` `Company` `SuperTrust`',
        },
        address: { type: 'string' },
        id: { type: 'string' },
        isApproved: { type: 'boolean' },
        ccEmail: { type: 'string' },
        taxFile: { type: ['string', 'null'], minLength: 9 },
        finclearAccountNumber: { type: ['string', 'null'] },
        primaryCountry: { type: 'string' },
        dvp: {
          type: 'object',
          properties: {
            hin: { type: 'string' },
            brokerIdentification: {
              type: 'object',
              properties: {
                pid: { type: 'string' },
                broker: {
                  type: 'object',
                  properties: { name: { type: ['string', 'null'] } },
                  required: ['name'],
                },
              },
              required: ['pid', 'broker'],
            },
          },
          required: ['hin', 'brokerIdentification'],
        },
        individualEntity: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            name: { type: 'string' },
            middleName: { type: ['string', 'null'] },
            surname: { type: 'string' },
            birthday: { format: 'date-time', type: 'string' },
            countryPassport: { type: 'string' },
            identificationDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investorEntityDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['investorEntityDocument'],
              },
            },
          },
          required: [
            'title',
            'name',
            'middleName',
            'surname',
            'birthday',
            'countryPassport',
            'identificationDocuments',
          ],
        },
        companyEntity: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['Proprietary', 'Public', 'Private'],
              description: '`Proprietary` `Public` `Private`',
            },
            name: { type: 'string' },
            tradingName: { type: 'string' },
            accountDesignation: { type: ['string', 'null'] },
            abnNumber: { type: 'string' },
            extractDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investorEntityDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['investorEntityDocument'],
              },
            },
            directorDetail: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                birthday: { format: 'date-time', type: 'string' },
                countryBirth: { type: 'string' },
                identificationDocuments: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      investorEntityDocument: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                        required: ['id', 'name'],
                      },
                    },
                    required: ['investorEntityDocument'],
                  },
                },
              },
              required: ['name', 'birthday', 'countryBirth', 'identificationDocuments'],
            },
          },
          required: [
            'type',
            'name',
            'tradingName',
            'accountDesignation',
            'abnNumber',
            'extractDocuments',
            'directorDetail',
          ],
        },
        trustEntity: {
          type: 'object',
          properties: {
            type: { type: 'string' },
            name: { type: 'string' },
            tradingName: { type: 'string' },
            accountDesignation: { type: ['string', 'null'] },
            abnNumber: { type: 'string' },
            uboList: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                  birthday: { format: 'date-time', type: 'string' },
                  countryBirth: { type: 'string' },
                  identificationDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                },
                required: ['id', 'name', 'birthday', 'countryBirth', 'identificationDocuments'],
              },
            },
            deedDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investorEntityDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['investorEntityDocument'],
              },
            },
          },
          required: [
            'type',
            'name',
            'tradingName',
            'accountDesignation',
            'abnNumber',
            'uboList',
            'deedDocuments',
          ],
        },
      },
      required: [
        'type',
        'address',
        'id',
        'isApproved',
        'ccEmail',
        'taxFile',
        'finclearAccountNumber',
        'primaryCountry',
        'dvp',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminInvestorEntityUpdate = {
  body: {
    type: 'object',
    properties: {
      type: { type: 'string', enum: ['IndividualJoint', 'Company', 'SuperTrust'] },
      dvp: {
        type: 'object',
        properties: { hin: { type: 'string' }, brokerPid: { type: 'string' } },
      },
      trustEntity: {
        type: 'object',
        properties: {
          uboList: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                identificationDocuments: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      investorEntityDocument: {
                        type: 'object',
                        properties: { name: { type: 'string' } },
                        required: ['name'],
                      },
                    },
                    required: ['investorEntityDocument'],
                  },
                },
                name: { type: 'string' },
                birthday: { format: 'date-time', type: 'string' },
                countryBirth: { type: 'string' },
                id: { type: 'string' },
              },
              required: ['identificationDocuments', 'name', 'birthday', 'countryBirth'],
            },
          },
          deletedUboIds: { type: 'array', items: { type: 'string' } },
          type: { type: 'string' },
          name: { type: 'string' },
          tradingName: { type: 'string' },
          accountDesignation: { type: ['string', 'null'] },
          abnNumber: { type: 'string' },
          deedDocuments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                investorEntityDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['investorEntityDocument'],
            },
          },
        },
      },
      individualEntity: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          name: { type: 'string' },
          middleName: { type: ['string', 'null'] },
          surname: { type: 'string' },
          birthday: { format: 'date-time', type: 'string' },
          countryPassport: { type: 'string' },
          identificationDocuments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                investorEntityDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['investorEntityDocument'],
            },
          },
        },
      },
      companyEntity: {
        type: 'object',
        properties: {
          type: { type: 'string', enum: ['Proprietary', 'Public', 'Private'] },
          directorDetail: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              birthday: { format: 'date-time', type: 'string' },
              countryBirth: { type: 'string' },
              identificationDocuments: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    investorEntityDocument: {
                      type: 'object',
                      properties: { name: { type: 'string' } },
                      required: ['name'],
                    },
                  },
                  required: ['investorEntityDocument'],
                },
              },
            },
          },
          isApproved: { type: 'boolean' },
          name: { type: 'string' },
          tradingName: { type: 'string' },
          accountDesignation: { type: ['string', 'null'] },
          abnNumber: { type: 'string' },
          extractDocuments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                investorEntityDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['investorEntityDocument'],
            },
          },
        },
      },
      address: { type: 'string' },
      isApproved: { type: 'boolean' },
      ccEmail: { type: 'string' },
      taxFile: { type: ['string', 'null'], minLength: 9 },
      finclearAccountNumber: { type: ['string', 'null'] },
      primaryCountry: { type: 'string' },
    },
    required: ['type'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          entityId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId', 'entityId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['IndividualJoint', 'Company', 'SuperTrust'],
          description: '`IndividualJoint` `Company` `SuperTrust`',
        },
        address: { type: 'string' },
        id: { type: 'string' },
        isApproved: { type: 'boolean' },
        ccEmail: { type: 'string' },
        taxFile: { type: ['string', 'null'], minLength: 9 },
        finclearAccountNumber: { type: ['string', 'null'] },
        primaryCountry: { type: 'string' },
        dvp: {
          type: 'object',
          properties: {
            hin: { type: 'string' },
            brokerIdentification: {
              type: 'object',
              properties: {
                pid: { type: 'string' },
                broker: {
                  type: 'object',
                  properties: { name: { type: ['string', 'null'] } },
                  required: ['name'],
                },
              },
              required: ['pid', 'broker'],
            },
          },
          required: ['hin', 'brokerIdentification'],
        },
        individualEntity: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            name: { type: 'string' },
            middleName: { type: ['string', 'null'] },
            surname: { type: 'string' },
            birthday: { format: 'date-time', type: 'string' },
            countryPassport: { type: 'string' },
            identificationDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investorEntityDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['investorEntityDocument'],
              },
            },
          },
          required: [
            'title',
            'name',
            'middleName',
            'surname',
            'birthday',
            'countryPassport',
            'identificationDocuments',
          ],
        },
        companyEntity: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['Proprietary', 'Public', 'Private'],
              description: '`Proprietary` `Public` `Private`',
            },
            name: { type: 'string' },
            tradingName: { type: 'string' },
            accountDesignation: { type: ['string', 'null'] },
            abnNumber: { type: 'string' },
            extractDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investorEntityDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['investorEntityDocument'],
              },
            },
            directorDetail: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                birthday: { format: 'date-time', type: 'string' },
                countryBirth: { type: 'string' },
                identificationDocuments: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      investorEntityDocument: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                        required: ['id', 'name'],
                      },
                    },
                    required: ['investorEntityDocument'],
                  },
                },
              },
              required: ['name', 'birthday', 'countryBirth', 'identificationDocuments'],
            },
          },
          required: [
            'type',
            'name',
            'tradingName',
            'accountDesignation',
            'abnNumber',
            'extractDocuments',
            'directorDetail',
          ],
        },
        trustEntity: {
          type: 'object',
          properties: {
            type: { type: 'string' },
            name: { type: 'string' },
            tradingName: { type: 'string' },
            accountDesignation: { type: ['string', 'null'] },
            abnNumber: { type: 'string' },
            uboList: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                  birthday: { format: 'date-time', type: 'string' },
                  countryBirth: { type: 'string' },
                  identificationDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                },
                required: ['id', 'name', 'birthday', 'countryBirth', 'identificationDocuments'],
              },
            },
            deedDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investorEntityDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['investorEntityDocument'],
              },
            },
          },
          required: [
            'type',
            'name',
            'tradingName',
            'accountDesignation',
            'abnNumber',
            'uboList',
            'deedDocuments',
          ],
        },
      },
      required: [
        'type',
        'address',
        'id',
        'isApproved',
        'ccEmail',
        'taxFile',
        'finclearAccountNumber',
        'primaryCountry',
        'dvp',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminInvestorFindOne = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        rating: { type: 'number', minimum: 1 },
        status: {
          type: 'string',
          enum: ['Approved', 'Pending', 'Restrict'],
          description: '`Approved` `Pending` `Restrict`',
        },
        investmentMinSize: { type: ['number', 'null'], minimum: 1 },
        investmentMaxSize: { type: ['number', 'null'], minimum: 1 },
        isIdentificationDocumentApproved: { type: 'boolean' },
        isApproved: { type: 'boolean' },
        identificationDocuments: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              document: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['document'],
          },
        },
        entities: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                enum: ['IndividualJoint', 'Company', 'SuperTrust'],
                description: '`IndividualJoint` `Company` `SuperTrust`',
              },
              address: { type: 'string' },
              id: { type: 'string' },
              isApproved: { type: 'boolean' },
              ccEmail: { type: 'string' },
              taxFile: { type: ['string', 'null'], minLength: 9 },
              finclearAccountNumber: { type: ['string', 'null'] },
              primaryCountry: { type: 'string' },
              dvp: {
                type: 'object',
                properties: {
                  hin: { type: 'string' },
                  brokerIdentification: {
                    type: 'object',
                    properties: {
                      pid: { type: 'string' },
                      broker: {
                        type: 'object',
                        properties: { name: { type: ['string', 'null'] } },
                        required: ['name'],
                      },
                    },
                    required: ['pid', 'broker'],
                  },
                },
                required: ['hin', 'brokerIdentification'],
              },
              individualEntity: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  name: { type: 'string' },
                  middleName: { type: ['string', 'null'] },
                  surname: { type: 'string' },
                  birthday: { format: 'date-time', type: 'string' },
                  countryPassport: { type: 'string' },
                  identificationDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                },
                required: [
                  'title',
                  'name',
                  'middleName',
                  'surname',
                  'birthday',
                  'countryPassport',
                  'identificationDocuments',
                ],
              },
              companyEntity: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['Proprietary', 'Public', 'Private'],
                    description: '`Proprietary` `Public` `Private`',
                  },
                  name: { type: 'string' },
                  tradingName: { type: 'string' },
                  accountDesignation: { type: ['string', 'null'] },
                  abnNumber: { type: 'string' },
                  extractDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                  directorDetail: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      birthday: { format: 'date-time', type: 'string' },
                      countryBirth: { type: 'string' },
                      identificationDocuments: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            investorEntityDocument: {
                              type: 'object',
                              properties: { id: { type: 'string' }, name: { type: 'string' } },
                              required: ['id', 'name'],
                            },
                          },
                          required: ['investorEntityDocument'],
                        },
                      },
                    },
                    required: ['name', 'birthday', 'countryBirth', 'identificationDocuments'],
                  },
                },
                required: [
                  'type',
                  'name',
                  'tradingName',
                  'accountDesignation',
                  'abnNumber',
                  'extractDocuments',
                  'directorDetail',
                ],
              },
              trustEntity: {
                type: 'object',
                properties: {
                  type: { type: 'string' },
                  name: { type: 'string' },
                  tradingName: { type: 'string' },
                  accountDesignation: { type: ['string', 'null'] },
                  abnNumber: { type: 'string' },
                  uboList: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        birthday: { format: 'date-time', type: 'string' },
                        countryBirth: { type: 'string' },
                        identificationDocuments: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              investorEntityDocument: {
                                type: 'object',
                                properties: { id: { type: 'string' }, name: { type: 'string' } },
                                required: ['id', 'name'],
                              },
                            },
                            required: ['investorEntityDocument'],
                          },
                        },
                      },
                      required: [
                        'id',
                        'name',
                        'birthday',
                        'countryBirth',
                        'identificationDocuments',
                      ],
                    },
                  },
                  deedDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                },
                required: [
                  'type',
                  'name',
                  'tradingName',
                  'accountDesignation',
                  'abnNumber',
                  'uboList',
                  'deedDocuments',
                ],
              },
            },
            required: [
              'type',
              'address',
              'id',
              'isApproved',
              'ccEmail',
              'taxFile',
              'finclearAccountNumber',
              'primaryCountry',
              'dvp',
            ],
          },
        },
        user: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            email: { type: 'string' },
            firstName: { type: 'string' },
            middleName: { type: ['string', 'null'] },
            lastName: { type: 'string' },
            title: { type: ['string', 'null'] },
            picture: { type: ['string', 'null'] },
            phoneNumber: {
              type: 'object',
              properties: {
                number: { type: 'string', description: 'Phone number', examples: ['0400000000'] },
                countryCode: {
                  type: 'string',
                  minLength: 1,
                  maxLength: 4,
                  description: 'Country code',
                  examples: ['61'],
                },
              },
              required: ['number', 'countryCode'],
            },
          },
          required: [
            'id',
            'email',
            'firstName',
            'middleName',
            'lastName',
            'title',
            'picture',
            'phoneNumber',
          ],
        },
        individualInvestor: {
          type: 'object',
          properties: {
            sophisticatedInvestorDocument: {
              type: 'object',
              properties: {
                isApproved: { type: 'boolean' },
                expiresAt: { format: 'date-time', type: 'string' },
                document: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                  required: ['id', 'name'],
                },
              },
              required: ['isApproved', 'expiresAt'],
            },
          },
        },
        brokerInvestor: {
          type: 'object',
          properties: {
            afslFormDocument: {
              type: 'object',
              properties: {
                isApproved: { type: 'boolean' },
                expiresAt: { format: 'date-time', type: 'string' },
                document: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                  required: ['id', 'name'],
                },
              },
              required: ['isApproved', 'expiresAt', 'document'],
            },
          },
          required: ['afslFormDocument'],
        },
      },
      required: [
        'rating',
        'status',
        'investmentMinSize',
        'investmentMaxSize',
        'isIdentificationDocumentApproved',
        'isApproved',
        'identificationDocuments',
        'entities',
        'user',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminInvestorGroupAddInvestor = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorGroupId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorGroupId', 'investorId'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminInvestorGroupCreate = {
  body: {
    type: 'object',
    properties: { name: { type: 'string' } },
    required: ['name'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminInvestorGroupDelete = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorGroupId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorGroupId'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminInvestorGroupGet = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorGroupId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorGroupId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      additionalProperties: true,
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminInvestorGroupList = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          name: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          page: { minimum: 1, type: 'number', $schema: 'http://json-schema.org/draft-04/schema#' },
          perPage: {
            minimum: 1,
            type: 'number',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: ['page', 'perPage'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: { id: { type: 'string' }, name: { type: 'string' } },
            required: ['id', 'name'],
          },
        },
        pagination: {
          type: 'object',
          properties: {
            total: { type: 'number' },
            lastPage: { type: 'number' },
            currentPage: { type: 'number' },
            perPage: { type: 'number' },
            from: { type: 'number' },
            to: { type: 'number' },
          },
          required: ['total', 'lastPage', 'currentPage', 'perPage', 'from', 'to'],
        },
      },
      required: ['data', 'pagination'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminInvestorGroupRemoveInvestor = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorGroupId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorGroupId', 'investorId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      additionalProperties: true,
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminInvestorGroupUpdate = {
  body: {
    type: 'object',
    properties: { name: { type: 'string' } },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorGroupId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorGroupId'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminInvestorList = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorType: {
            enum: ['brokerInvestor', 'individualInvestor'],
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          hasAcceptedBehindWallTerm: {
            type: 'boolean',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              "Applied when 'addDealId' is provided. Indicates to retrieve all investors, whether they have accepted behind-wall terms.",
          },
          isAllocatedBid: {
            type: 'boolean',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              "Applied when 'addDealId' is provided. Retrieves investors where their bid has been allocated or not.",
          },
          filter: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          addInvestorGroupId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          excludeInvestorGroupId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          addDealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          page: { minimum: 1, type: 'number', $schema: 'http://json-schema.org/draft-04/schema#' },
          perPage: {
            minimum: 1,
            type: 'number',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: ['page', 'perPage'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              rating: { type: 'number', minimum: 1 },
              status: {
                type: 'string',
                enum: ['Approved', 'Pending', 'Restrict'],
                description: '`Approved` `Pending` `Restrict`',
              },
              investmentMinSize: { type: ['number', 'null'], minimum: 1 },
              investmentMaxSize: { type: ['number', 'null'], minimum: 1 },
              isIdentificationDocumentApproved: { type: 'boolean' },
              entities: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['IndividualJoint', 'Company', 'SuperTrust'],
                      description: '`IndividualJoint` `Company` `SuperTrust`',
                    },
                    bids: {
                      description:
                        'This field will exist only if the "addDealId" filter has been applied.',
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          investmentAmount: { type: 'number' },
                          bidId: { type: 'string' },
                          investorEntityId: { type: 'string' },
                          isAllocated: { type: 'boolean' },
                        },
                        required: ['investmentAmount', 'bidId', 'investorEntityId', 'isAllocated'],
                      },
                    },
                    address: { type: 'string' },
                    id: { type: 'string' },
                    isApproved: { type: 'boolean' },
                    ccEmail: { type: 'string' },
                    taxFile: { type: ['string', 'null'], minLength: 9 },
                    finclearAccountNumber: { type: ['string', 'null'] },
                    primaryCountry: { type: 'string' },
                    dvp: {
                      type: 'object',
                      properties: {
                        hin: { type: 'string' },
                        brokerIdentification: {
                          type: 'object',
                          properties: {
                            pid: { type: 'string' },
                            broker: {
                              type: 'object',
                              properties: { name: { type: ['string', 'null'] } },
                              required: ['name'],
                            },
                          },
                          required: ['pid', 'broker'],
                        },
                      },
                      required: ['hin', 'brokerIdentification'],
                    },
                    individualEntity: {
                      type: 'object',
                      properties: {
                        title: { type: 'string' },
                        name: { type: 'string' },
                        middleName: { type: ['string', 'null'] },
                        surname: { type: 'string' },
                        birthday: { format: 'date-time', type: 'string' },
                        countryPassport: { type: 'string' },
                        identificationDocuments: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              investorEntityDocument: {
                                type: 'object',
                                properties: { id: { type: 'string' }, name: { type: 'string' } },
                                required: ['id', 'name'],
                              },
                            },
                            required: ['investorEntityDocument'],
                          },
                        },
                      },
                      required: [
                        'title',
                        'name',
                        'middleName',
                        'surname',
                        'birthday',
                        'countryPassport',
                        'identificationDocuments',
                      ],
                    },
                    companyEntity: {
                      type: 'object',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['Proprietary', 'Public', 'Private'],
                          description: '`Proprietary` `Public` `Private`',
                        },
                        name: { type: 'string' },
                        tradingName: { type: 'string' },
                        accountDesignation: { type: ['string', 'null'] },
                        abnNumber: { type: 'string' },
                        extractDocuments: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              investorEntityDocument: {
                                type: 'object',
                                properties: { id: { type: 'string' }, name: { type: 'string' } },
                                required: ['id', 'name'],
                              },
                            },
                            required: ['investorEntityDocument'],
                          },
                        },
                        directorDetail: {
                          type: 'object',
                          properties: {
                            name: { type: 'string' },
                            birthday: { format: 'date-time', type: 'string' },
                            countryBirth: { type: 'string' },
                            identificationDocuments: {
                              type: 'array',
                              items: {
                                type: 'object',
                                properties: {
                                  investorEntityDocument: {
                                    type: 'object',
                                    properties: {
                                      id: { type: 'string' },
                                      name: { type: 'string' },
                                    },
                                    required: ['id', 'name'],
                                  },
                                },
                                required: ['investorEntityDocument'],
                              },
                            },
                          },
                          required: ['name', 'birthday', 'countryBirth', 'identificationDocuments'],
                        },
                      },
                      required: [
                        'type',
                        'name',
                        'tradingName',
                        'accountDesignation',
                        'abnNumber',
                        'extractDocuments',
                        'directorDetail',
                      ],
                    },
                    trustEntity: {
                      type: 'object',
                      properties: {
                        type: { type: 'string' },
                        name: { type: 'string' },
                        tradingName: { type: 'string' },
                        accountDesignation: { type: ['string', 'null'] },
                        abnNumber: { type: 'string' },
                        uboList: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              id: { type: 'string' },
                              name: { type: 'string' },
                              birthday: { format: 'date-time', type: 'string' },
                              countryBirth: { type: 'string' },
                              identificationDocuments: {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    investorEntityDocument: {
                                      type: 'object',
                                      properties: {
                                        id: { type: 'string' },
                                        name: { type: 'string' },
                                      },
                                      required: ['id', 'name'],
                                    },
                                  },
                                  required: ['investorEntityDocument'],
                                },
                              },
                            },
                            required: [
                              'id',
                              'name',
                              'birthday',
                              'countryBirth',
                              'identificationDocuments',
                            ],
                          },
                        },
                        deedDocuments: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              investorEntityDocument: {
                                type: 'object',
                                properties: { id: { type: 'string' }, name: { type: 'string' } },
                                required: ['id', 'name'],
                              },
                            },
                            required: ['investorEntityDocument'],
                          },
                        },
                      },
                      required: [
                        'type',
                        'name',
                        'tradingName',
                        'accountDesignation',
                        'abnNumber',
                        'uboList',
                        'deedDocuments',
                      ],
                    },
                  },
                  required: [
                    'type',
                    'address',
                    'id',
                    'isApproved',
                    'ccEmail',
                    'taxFile',
                    'finclearAccountNumber',
                    'primaryCountry',
                    'dvp',
                  ],
                },
              },
              isApproved: { type: 'boolean' },
              identificationDocuments: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    document: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                      required: ['id', 'name'],
                    },
                  },
                  required: ['document'],
                },
              },
              user: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  email: { type: 'string' },
                  firstName: { type: 'string' },
                  middleName: { type: ['string', 'null'] },
                  lastName: { type: 'string' },
                  title: { type: ['string', 'null'] },
                  picture: { type: ['string', 'null'] },
                  phoneNumber: {
                    type: 'object',
                    properties: {
                      number: {
                        type: 'string',
                        description: 'Phone number',
                        examples: ['0400000000'],
                      },
                      countryCode: {
                        type: 'string',
                        minLength: 1,
                        maxLength: 4,
                        description: 'Country code',
                        examples: ['61'],
                      },
                    },
                    required: ['number', 'countryCode'],
                  },
                },
                required: [
                  'id',
                  'email',
                  'firstName',
                  'middleName',
                  'lastName',
                  'title',
                  'picture',
                  'phoneNumber',
                ],
              },
              individualInvestor: {
                type: 'object',
                properties: {
                  sophisticatedInvestorDocument: {
                    type: 'object',
                    properties: {
                      isApproved: { type: 'boolean' },
                      expiresAt: { format: 'date-time', type: 'string' },
                      document: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                        required: ['id', 'name'],
                      },
                    },
                    required: ['isApproved', 'expiresAt'],
                  },
                },
              },
              brokerInvestor: {
                type: 'object',
                properties: {
                  afslFormDocument: {
                    type: 'object',
                    properties: {
                      isApproved: { type: 'boolean' },
                      expiresAt: { format: 'date-time', type: 'string' },
                      document: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                        required: ['id', 'name'],
                      },
                    },
                    required: ['isApproved', 'expiresAt', 'document'],
                  },
                },
                required: ['afslFormDocument'],
              },
            },
            required: [
              'rating',
              'status',
              'investmentMinSize',
              'investmentMaxSize',
              'isIdentificationDocumentApproved',
              'entities',
              'isApproved',
              'identificationDocuments',
              'user',
            ],
          },
        },
        pagination: {
          type: 'object',
          properties: {
            total: { type: 'number' },
            lastPage: { type: 'number' },
            currentPage: { type: 'number' },
            perPage: { type: 'number' },
            from: { type: 'number' },
            to: { type: 'number' },
          },
          required: ['total', 'lastPage', 'currentPage', 'perPage', 'from', 'to'],
        },
      },
      required: ['data', 'pagination'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AdminInvestorUpdate = {
  body: {
    type: 'object',
    properties: {
      rating: { type: 'number', minimum: 1 },
      status: { type: 'string', enum: ['Approved', 'Pending', 'Restrict'] },
      isIdentificationDocumentApproved: { type: 'boolean' },
      identificationDocuments: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            document: {
              type: 'object',
              properties: { name: { type: 'string' } },
              required: ['name'],
            },
          },
          required: ['document'],
        },
      },
      isApproved: { type: 'boolean' },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        rating: { type: 'number', minimum: 1 },
        status: {
          type: 'string',
          enum: ['Approved', 'Pending', 'Restrict'],
          description: '`Approved` `Pending` `Restrict`',
        },
        investmentMinSize: { type: ['number', 'null'], minimum: 1 },
        investmentMaxSize: { type: ['number', 'null'], minimum: 1 },
        isIdentificationDocumentApproved: { type: 'boolean' },
        isApproved: { type: 'boolean' },
        identificationDocuments: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              document: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['document'],
          },
        },
        entities: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                enum: ['IndividualJoint', 'Company', 'SuperTrust'],
                description: '`IndividualJoint` `Company` `SuperTrust`',
              },
              address: { type: 'string' },
              id: { type: 'string' },
              isApproved: { type: 'boolean' },
              ccEmail: { type: 'string' },
              taxFile: { type: ['string', 'null'], minLength: 9 },
              finclearAccountNumber: { type: ['string', 'null'] },
              primaryCountry: { type: 'string' },
              dvp: {
                type: 'object',
                properties: {
                  hin: { type: 'string' },
                  brokerIdentification: {
                    type: 'object',
                    properties: {
                      pid: { type: 'string' },
                      broker: {
                        type: 'object',
                        properties: { name: { type: ['string', 'null'] } },
                        required: ['name'],
                      },
                    },
                    required: ['pid', 'broker'],
                  },
                },
                required: ['hin', 'brokerIdentification'],
              },
              individualEntity: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  name: { type: 'string' },
                  middleName: { type: ['string', 'null'] },
                  surname: { type: 'string' },
                  birthday: { format: 'date-time', type: 'string' },
                  countryPassport: { type: 'string' },
                  identificationDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                },
                required: [
                  'title',
                  'name',
                  'middleName',
                  'surname',
                  'birthday',
                  'countryPassport',
                  'identificationDocuments',
                ],
              },
              companyEntity: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['Proprietary', 'Public', 'Private'],
                    description: '`Proprietary` `Public` `Private`',
                  },
                  name: { type: 'string' },
                  tradingName: { type: 'string' },
                  accountDesignation: { type: ['string', 'null'] },
                  abnNumber: { type: 'string' },
                  extractDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                  directorDetail: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      birthday: { format: 'date-time', type: 'string' },
                      countryBirth: { type: 'string' },
                      identificationDocuments: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            investorEntityDocument: {
                              type: 'object',
                              properties: { id: { type: 'string' }, name: { type: 'string' } },
                              required: ['id', 'name'],
                            },
                          },
                          required: ['investorEntityDocument'],
                        },
                      },
                    },
                    required: ['name', 'birthday', 'countryBirth', 'identificationDocuments'],
                  },
                },
                required: [
                  'type',
                  'name',
                  'tradingName',
                  'accountDesignation',
                  'abnNumber',
                  'extractDocuments',
                  'directorDetail',
                ],
              },
              trustEntity: {
                type: 'object',
                properties: {
                  type: { type: 'string' },
                  name: { type: 'string' },
                  tradingName: { type: 'string' },
                  accountDesignation: { type: ['string', 'null'] },
                  abnNumber: { type: 'string' },
                  uboList: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        birthday: { format: 'date-time', type: 'string' },
                        countryBirth: { type: 'string' },
                        identificationDocuments: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              investorEntityDocument: {
                                type: 'object',
                                properties: { id: { type: 'string' }, name: { type: 'string' } },
                                required: ['id', 'name'],
                              },
                            },
                            required: ['investorEntityDocument'],
                          },
                        },
                      },
                      required: [
                        'id',
                        'name',
                        'birthday',
                        'countryBirth',
                        'identificationDocuments',
                      ],
                    },
                  },
                  deedDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                },
                required: [
                  'type',
                  'name',
                  'tradingName',
                  'accountDesignation',
                  'abnNumber',
                  'uboList',
                  'deedDocuments',
                ],
              },
            },
            required: [
              'type',
              'address',
              'id',
              'isApproved',
              'ccEmail',
              'taxFile',
              'finclearAccountNumber',
              'primaryCountry',
              'dvp',
            ],
          },
        },
        user: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            email: { type: 'string' },
            firstName: { type: 'string' },
            middleName: { type: ['string', 'null'] },
            lastName: { type: 'string' },
            title: { type: ['string', 'null'] },
            picture: { type: ['string', 'null'] },
            phoneNumber: {
              type: 'object',
              properties: {
                number: { type: 'string', description: 'Phone number', examples: ['0400000000'] },
                countryCode: {
                  type: 'string',
                  minLength: 1,
                  maxLength: 4,
                  description: 'Country code',
                  examples: ['61'],
                },
              },
              required: ['number', 'countryCode'],
            },
          },
          required: [
            'id',
            'email',
            'firstName',
            'middleName',
            'lastName',
            'title',
            'picture',
            'phoneNumber',
          ],
        },
        individualInvestor: {
          type: 'object',
          properties: {
            sophisticatedInvestorDocument: {
              type: 'object',
              properties: {
                isApproved: { type: 'boolean' },
                expiresAt: { format: 'date-time', type: 'string' },
                document: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                  required: ['id', 'name'],
                },
              },
              required: ['isApproved', 'expiresAt'],
            },
          },
        },
        brokerInvestor: {
          type: 'object',
          properties: {
            afslFormDocument: {
              type: 'object',
              properties: {
                isApproved: { type: 'boolean' },
                expiresAt: { format: 'date-time', type: 'string' },
                document: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                  required: ['id', 'name'],
                },
              },
              required: ['isApproved', 'expiresAt', 'document'],
            },
          },
          required: ['afslFormDocument'],
        },
      },
      required: [
        'rating',
        'status',
        'investmentMinSize',
        'investmentMaxSize',
        'isIdentificationDocumentApproved',
        'isApproved',
        'identificationDocuments',
        'entities',
        'user',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AppGetHello = {
  response: { '200': { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const AuthAdminCreate = {
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      firstName: { type: 'string' },
      middleName: { type: ['string', 'null'] },
      lastName: { type: 'string' },
      title: { type: ['string', 'null'] },
      picture: { type: ['string', 'null'] },
      phoneNumber: {
        type: 'object',
        properties: {
          number: { type: 'string', description: 'Phone number', examples: ['0400000000'] },
          countryCode: {
            type: 'string',
            minLength: 1,
            maxLength: 4,
            description: 'Country code',
            examples: ['61'],
          },
        },
        required: ['number', 'countryCode'],
      },
      password: { type: 'string' },
    },
    required: [
      'email',
      'firstName',
      'middleName',
      'lastName',
      'title',
      'picture',
      'phoneNumber',
      'password',
    ],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AuthAdminLoginFirstStep = {
  body: {
    type: 'object',
    properties: { email: { type: 'string' }, password: { type: 'string' } },
    required: ['email', 'password'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        number: { type: 'string', description: 'Phone number', examples: ['0400000000'] },
        countryCode: {
          type: 'string',
          minLength: 1,
          maxLength: 4,
          description: 'Country code',
          examples: ['61'],
        },
      },
      required: ['number', 'countryCode'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AuthAdminLoginSecondStep = {
  body: {
    type: 'object',
    properties: { code: { type: 'string' }, email: { type: 'string' } },
    required: ['code', 'email'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        admin: {
          type: 'object',
          properties: {
            user: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                email: { type: 'string' },
                firstName: { type: 'string' },
                middleName: { type: ['string', 'null'] },
                lastName: { type: 'string' },
                title: { type: ['string', 'null'] },
                picture: { type: ['string', 'null'] },
                phoneNumber: {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'string',
                      description: 'Phone number',
                      examples: ['0400000000'],
                    },
                    countryCode: {
                      type: 'string',
                      minLength: 1,
                      maxLength: 4,
                      description: 'Country code',
                      examples: ['61'],
                    },
                  },
                  required: ['number', 'countryCode'],
                },
              },
              required: [
                'id',
                'email',
                'firstName',
                'middleName',
                'lastName',
                'title',
                'picture',
                'phoneNumber',
              ],
            },
          },
          required: ['user'],
        },
        authenticationCode: { type: 'string' },
      },
      required: ['admin', 'authenticationCode'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AuthAdminMe = {
  response: {
    '200': {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            email: { type: 'string' },
            firstName: { type: 'string' },
            middleName: { type: ['string', 'null'] },
            lastName: { type: 'string' },
            title: { type: ['string', 'null'] },
            picture: { type: ['string', 'null'] },
            phoneNumber: {
              type: 'object',
              properties: {
                number: { type: 'string', description: 'Phone number', examples: ['0400000000'] },
                countryCode: {
                  type: 'string',
                  minLength: 1,
                  maxLength: 4,
                  description: 'Country code',
                  examples: ['61'],
                },
              },
              required: ['number', 'countryCode'],
            },
          },
          required: [
            'id',
            'email',
            'firstName',
            'middleName',
            'lastName',
            'title',
            'picture',
            'phoneNumber',
          ],
        },
      },
      required: ['user'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const BidAdminCreate = {
  body: {
    type: 'object',
    properties: {
      entityBids: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            investmentAmount: { type: 'number' },
            investorEntityId: { type: 'string' },
          },
          required: ['investmentAmount', 'investorEntityId'],
        },
      },
    },
    required: ['entityBids'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId', 'dealId'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        id: { type: 'string' },
        dealId: { type: 'string' },
        entityBids: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              investmentAmount: { type: 'number' },
              investorEntityId: { type: 'string' },
              isAllocated: { type: 'boolean' },
            },
            required: ['investmentAmount', 'investorEntityId', 'isAllocated'],
          },
        },
      },
      required: ['id', 'dealId', 'entityBids'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const BidAdminDelete = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          bidId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId', 'dealId', 'bidId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        id: { type: 'string' },
        dealId: { type: 'string' },
        entityBids: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              investmentAmount: { type: 'number' },
              investorEntityId: { type: 'string' },
              isAllocated: { type: 'boolean' },
            },
            required: ['investmentAmount', 'investorEntityId', 'isAllocated'],
          },
        },
      },
      required: ['id', 'dealId', 'entityBids'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const BidAdminUpdate = {
  body: {
    type: 'object',
    properties: {
      entityBids: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            investmentAmount: { type: 'number' },
            investorEntityId: { type: 'string' },
          },
          required: ['investmentAmount', 'investorEntityId'],
        },
      },
    },
    required: ['entityBids'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          bidId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId', 'dealId', 'bidId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        id: { type: 'string' },
        dealId: { type: 'string' },
        entityBids: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              investmentAmount: { type: 'number' },
              investorEntityId: { type: 'string' },
              isAllocated: { type: 'boolean' },
            },
            required: ['investmentAmount', 'investorEntityId', 'isAllocated'],
          },
        },
      },
      required: ['id', 'dealId', 'entityBids'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const BidCreate = {
  body: {
    type: 'object',
    properties: {
      entityBids: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            investmentAmount: { type: 'number' },
            investorEntityId: { type: 'string' },
          },
          required: ['investmentAmount', 'investorEntityId'],
        },
      },
    },
    required: ['entityBids'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId', 'dealId'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        id: { type: 'string' },
        dealId: { type: 'string' },
        entityBids: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              investmentAmount: { type: 'number' },
              investorEntityId: { type: 'string' },
              isAllocated: { type: 'boolean' },
            },
            required: ['investmentAmount', 'investorEntityId', 'isAllocated'],
          },
        },
      },
      required: ['id', 'dealId', 'entityBids'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const BrokerInvestorUpdate = {
  body: {
    type: 'object',
    properties: {
      afslFormDocument: {
        type: 'object',
        properties: {
          document: {
            type: 'object',
            properties: { name: { type: 'string' } },
            required: ['name'],
          },
        },
        required: ['document'],
      },
    },
    required: ['afslFormDocument'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const DealAllocationCreate = {
  body: {
    type: 'object',
    properties: {
      receivedAmount: { type: 'number' },
      dualTranche: {
        type: 'object',
        properties: { firstTranche: { type: 'number' }, secondTranche: { type: 'number' } },
        required: ['firstTranche', 'secondTranche'],
      },
      keyDate: {
        type: 'object',
        properties: {
          settlementDate: { format: 'date-time', type: 'string' },
          acceptanceDate: { format: 'date-time', type: 'string' },
          allotmentDate: { format: 'date-time', type: 'string' },
        },
        required: ['settlementDate', 'acceptanceDate', 'allotmentDate'],
      },
      settlement: {
        type: 'object',
        properties: {
          type: { type: 'string', enum: ['Dvp', 'FundTransfer', 'InternalTransfer'] },
          dvpDetail: {
            type: 'object',
            properties: { code: { type: 'string' }, isin: { type: 'string' } },
            required: ['code', 'isin'],
          },
          transferDetail: {
            type: 'object',
            properties: {
              paymentDueDate: { format: 'date-time', type: 'string' },
              detail: { type: ['string', 'null'] },
            },
            required: ['paymentDueDate', 'detail'],
          },
        },
        required: ['type'],
      },
      bids: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            entityBids: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investmentAmount: { type: 'number' },
                  investorEntityId: { type: 'string' },
                  isAllocated: { type: 'boolean' },
                },
                required: ['investmentAmount', 'investorEntityId', 'isAllocated'],
              },
            },
            id: { type: 'string' },
          },
          required: ['entityBids', 'id'],
        },
      },
      brokerName: { type: 'string' },
      isVisible: { type: 'boolean' },
      isHotAllocation: { type: 'boolean' },
    },
    required: [
      'receivedAmount',
      'keyDate',
      'settlement',
      'bids',
      'brokerName',
      'isVisible',
      'isHotAllocation',
    ],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['dealId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        receivedAmount: { type: 'number' },
        brokerName: { type: 'string' },
        isVisible: { type: 'boolean' },
        isHotAllocation: { type: 'boolean' },
        keyDate: {
          type: 'object',
          properties: {
            settlementDate: { format: 'date-time', type: 'string' },
            acceptanceDate: { format: 'date-time', type: 'string' },
            allotmentDate: { format: 'date-time', type: 'string' },
          },
          required: ['settlementDate', 'acceptanceDate', 'allotmentDate'],
        },
        settlement: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['Dvp', 'FundTransfer', 'InternalTransfer'],
              description: '`Dvp` `FundTransfer` `InternalTransfer`',
            },
            dvpDetail: {
              type: ['object', 'null'],
              required: ['code', 'isin'],
              properties: { code: { type: 'string' }, isin: { type: 'string' } },
            },
            transferDetail: {
              type: ['object', 'null'],
              required: ['paymentDueDate', 'detail'],
              properties: {
                paymentDueDate: { format: 'date-time', type: 'string' },
                detail: { type: ['string', 'null'] },
              },
            },
          },
          required: ['type', 'dvpDetail', 'transferDetail'],
        },
        dualTranche: {
          type: 'object',
          properties: { firstTranche: { type: 'number' }, secondTranche: { type: 'number' } },
          required: ['firstTranche', 'secondTranche'],
        },
      },
      required: [
        'receivedAmount',
        'brokerName',
        'isVisible',
        'isHotAllocation',
        'keyDate',
        'settlement',
        'dualTranche',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const DealAllocationFindOne = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['dealId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        receivedAmount: { type: 'number' },
        brokerName: { type: 'string' },
        isVisible: { type: 'boolean' },
        isHotAllocation: { type: 'boolean' },
        keyDate: {
          type: 'object',
          properties: {
            settlementDate: { format: 'date-time', type: 'string' },
            acceptanceDate: { format: 'date-time', type: 'string' },
            allotmentDate: { format: 'date-time', type: 'string' },
          },
          required: ['settlementDate', 'acceptanceDate', 'allotmentDate'],
        },
        settlement: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['Dvp', 'FundTransfer', 'InternalTransfer'],
              description: '`Dvp` `FundTransfer` `InternalTransfer`',
            },
            dvpDetail: {
              type: ['object', 'null'],
              required: ['code', 'isin'],
              properties: { code: { type: 'string' }, isin: { type: 'string' } },
            },
            transferDetail: {
              type: ['object', 'null'],
              required: ['paymentDueDate', 'detail'],
              properties: {
                paymentDueDate: { format: 'date-time', type: 'string' },
                detail: { type: ['string', 'null'] },
              },
            },
          },
          required: ['type', 'dvpDetail', 'transferDetail'],
        },
        dualTranche: {
          type: 'object',
          properties: { firstTranche: { type: 'number' }, secondTranche: { type: 'number' } },
          required: ['firstTranche', 'secondTranche'],
        },
      },
      required: [
        'receivedAmount',
        'brokerName',
        'isVisible',
        'isHotAllocation',
        'keyDate',
        'settlement',
        'dualTranche',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const FileDownload = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          fileName: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['fileName'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const FileDownloadResize = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          fileName: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          width: { type: 'number', $schema: 'http://json-schema.org/draft-04/schema#' },
          height: { type: 'number', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['fileName'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const FileUploadImage = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          rootFolder: {
            type: 'string',
            enum: ['images', 'videos', 'other'],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: ['rootFolder'],
      },
      {
        type: 'object',
        properties: {
          fileName: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'File name',
          },
          folder: {
            enum: ['documents', 'profiles'],
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Folder',
          },
        },
        required: ['fileName', 'folder'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    default: {
      type: 'object',
      properties: {
        url: { type: 'string', description: 'Url to upload or download file' },
        fileName: { type: 'string', description: 'New file name' },
      },
      required: ['url', 'fileName'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const HealthCheckCheck = {
  response: {
    '200': {
      type: 'object',
      properties: {
        status: { type: 'string', examples: ['ok'] },
        info: {
          type: ['object', 'null'],
          additionalProperties: {
            type: 'object',
            properties: { status: { type: 'string' } },
            additionalProperties: { type: 'string' },
          },
        },
        error: {
          type: ['object', 'null'],
          additionalProperties: {
            type: 'object',
            properties: { status: { type: 'string' } },
            additionalProperties: { type: 'string' },
          },
        },
        details: {
          type: 'object',
          additionalProperties: {
            type: 'object',
            properties: { status: { type: 'string' } },
            additionalProperties: { type: 'string' },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: {
        status: { type: 'string', examples: ['error'] },
        info: {
          type: ['object', 'null'],
          additionalProperties: {
            type: 'object',
            properties: { status: { type: 'string' } },
            additionalProperties: { type: 'string' },
          },
        },
        error: {
          type: ['object', 'null'],
          additionalProperties: {
            type: 'object',
            properties: { status: { type: 'string' } },
            additionalProperties: { type: 'string' },
          },
        },
        details: {
          type: 'object',
          additionalProperties: {
            type: 'object',
            properties: { status: { type: 'string' } },
            additionalProperties: { type: 'string' },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const IndividualInvestorUpdate = {
  body: {
    type: 'object',
    properties: {
      sophisticatedInvestorDocument: {
        type: 'object',
        properties: {
          document: {
            type: 'object',
            properties: { name: { type: 'string' } },
            required: ['name'],
          },
        },
        required: ['document'],
      },
    },
    required: ['sophisticatedInvestorDocument'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorAuthConfirmRetrieve = {
  body: {
    type: 'object',
    properties: {
      code: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' },
    },
    required: ['code', 'email', 'password'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorAuthGetMe = {
  response: {
    '200': {
      type: 'object',
      properties: {
        rating: { type: 'number', minimum: 1 },
        status: {
          type: 'string',
          enum: ['Approved', 'Pending', 'Restrict'],
          description: '`Approved` `Pending` `Restrict`',
        },
        investmentMinSize: { type: ['number', 'null'], minimum: 1 },
        investmentMaxSize: { type: ['number', 'null'], minimum: 1 },
        isIdentificationDocumentApproved: { type: 'boolean' },
        isApproved: { type: 'boolean' },
        identificationDocuments: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              document: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['document'],
          },
        },
        entities: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                enum: ['IndividualJoint', 'Company', 'SuperTrust'],
                description: '`IndividualJoint` `Company` `SuperTrust`',
              },
              address: { type: 'string' },
              id: { type: 'string' },
              isApproved: { type: 'boolean' },
              ccEmail: { type: 'string' },
              taxFile: { type: ['string', 'null'], minLength: 9 },
              finclearAccountNumber: { type: ['string', 'null'] },
              primaryCountry: { type: 'string' },
              dvp: {
                type: 'object',
                properties: {
                  hin: { type: 'string' },
                  brokerIdentification: {
                    type: 'object',
                    properties: {
                      pid: { type: 'string' },
                      broker: {
                        type: 'object',
                        properties: { name: { type: ['string', 'null'] } },
                        required: ['name'],
                      },
                    },
                    required: ['pid', 'broker'],
                  },
                },
                required: ['hin', 'brokerIdentification'],
              },
              individualEntity: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  name: { type: 'string' },
                  middleName: { type: ['string', 'null'] },
                  surname: { type: 'string' },
                  birthday: { format: 'date-time', type: 'string' },
                  countryPassport: { type: 'string' },
                  identificationDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                },
                required: [
                  'title',
                  'name',
                  'middleName',
                  'surname',
                  'birthday',
                  'countryPassport',
                  'identificationDocuments',
                ],
              },
              companyEntity: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['Proprietary', 'Public', 'Private'],
                    description: '`Proprietary` `Public` `Private`',
                  },
                  name: { type: 'string' },
                  tradingName: { type: 'string' },
                  accountDesignation: { type: ['string', 'null'] },
                  abnNumber: { type: 'string' },
                  extractDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                  directorDetail: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      birthday: { format: 'date-time', type: 'string' },
                      countryBirth: { type: 'string' },
                      identificationDocuments: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            investorEntityDocument: {
                              type: 'object',
                              properties: { id: { type: 'string' }, name: { type: 'string' } },
                              required: ['id', 'name'],
                            },
                          },
                          required: ['investorEntityDocument'],
                        },
                      },
                    },
                    required: ['name', 'birthday', 'countryBirth', 'identificationDocuments'],
                  },
                },
                required: [
                  'type',
                  'name',
                  'tradingName',
                  'accountDesignation',
                  'abnNumber',
                  'extractDocuments',
                  'directorDetail',
                ],
              },
              trustEntity: {
                type: 'object',
                properties: {
                  type: { type: 'string' },
                  name: { type: 'string' },
                  tradingName: { type: 'string' },
                  accountDesignation: { type: ['string', 'null'] },
                  abnNumber: { type: 'string' },
                  uboList: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        birthday: { format: 'date-time', type: 'string' },
                        countryBirth: { type: 'string' },
                        identificationDocuments: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              investorEntityDocument: {
                                type: 'object',
                                properties: { id: { type: 'string' }, name: { type: 'string' } },
                                required: ['id', 'name'],
                              },
                            },
                            required: ['investorEntityDocument'],
                          },
                        },
                      },
                      required: [
                        'id',
                        'name',
                        'birthday',
                        'countryBirth',
                        'identificationDocuments',
                      ],
                    },
                  },
                  deedDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                },
                required: [
                  'type',
                  'name',
                  'tradingName',
                  'accountDesignation',
                  'abnNumber',
                  'uboList',
                  'deedDocuments',
                ],
              },
            },
            required: [
              'type',
              'address',
              'id',
              'isApproved',
              'ccEmail',
              'taxFile',
              'finclearAccountNumber',
              'primaryCountry',
              'dvp',
            ],
          },
        },
        user: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            email: { type: 'string' },
            firstName: { type: 'string' },
            middleName: { type: ['string', 'null'] },
            lastName: { type: 'string' },
            title: { type: ['string', 'null'] },
            picture: { type: ['string', 'null'] },
            phoneNumber: {
              type: 'object',
              properties: {
                number: { type: 'string', description: 'Phone number', examples: ['0400000000'] },
                countryCode: {
                  type: 'string',
                  minLength: 1,
                  maxLength: 4,
                  description: 'Country code',
                  examples: ['61'],
                },
              },
              required: ['number', 'countryCode'],
            },
          },
          required: [
            'id',
            'email',
            'firstName',
            'middleName',
            'lastName',
            'title',
            'picture',
            'phoneNumber',
          ],
        },
        individualInvestor: {
          type: 'object',
          properties: {
            sophisticatedInvestorDocument: {
              type: 'object',
              properties: {
                isApproved: { type: 'boolean' },
                expiresAt: { format: 'date-time', type: 'string' },
                document: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                  required: ['id', 'name'],
                },
              },
              required: ['isApproved', 'expiresAt'],
            },
          },
        },
        brokerInvestor: {
          type: 'object',
          properties: {
            afslFormDocument: {
              type: 'object',
              properties: {
                isApproved: { type: 'boolean' },
                expiresAt: { format: 'date-time', type: 'string' },
                document: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                  required: ['id', 'name'],
                },
              },
              required: ['isApproved', 'expiresAt', 'document'],
            },
          },
          required: ['afslFormDocument'],
        },
      },
      required: [
        'rating',
        'status',
        'investmentMinSize',
        'investmentMaxSize',
        'isIdentificationDocumentApproved',
        'isApproved',
        'identificationDocuments',
        'entities',
        'user',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorAuthRetrieveAccount = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          email: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['email'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorAuthSignIn = {
  body: {
    type: 'object',
    properties: { email: { type: 'string' }, password: { type: 'string' } },
    required: ['email', 'password'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        investor: {
          type: 'object',
          properties: {
            rating: { type: 'number', minimum: 1 },
            status: {
              type: 'string',
              enum: ['Approved', 'Pending', 'Restrict'],
              description: '`Approved` `Pending` `Restrict`',
            },
            investmentMinSize: { type: ['number', 'null'], minimum: 1 },
            investmentMaxSize: { type: ['number', 'null'], minimum: 1 },
            isIdentificationDocumentApproved: { type: 'boolean' },
            isApproved: { type: 'boolean' },
            identificationDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  document: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['document'],
              },
            },
            entities: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['IndividualJoint', 'Company', 'SuperTrust'],
                    description: '`IndividualJoint` `Company` `SuperTrust`',
                  },
                  address: { type: 'string' },
                  id: { type: 'string' },
                  isApproved: { type: 'boolean' },
                  ccEmail: { type: 'string' },
                  taxFile: { type: ['string', 'null'], minLength: 9 },
                  finclearAccountNumber: { type: ['string', 'null'] },
                  primaryCountry: { type: 'string' },
                  dvp: {
                    type: 'object',
                    properties: {
                      hin: { type: 'string' },
                      brokerIdentification: {
                        type: 'object',
                        properties: {
                          pid: { type: 'string' },
                          broker: {
                            type: 'object',
                            properties: { name: { type: ['string', 'null'] } },
                            required: ['name'],
                          },
                        },
                        required: ['pid', 'broker'],
                      },
                    },
                    required: ['hin', 'brokerIdentification'],
                  },
                  individualEntity: {
                    type: 'object',
                    properties: {
                      title: { type: 'string' },
                      name: { type: 'string' },
                      middleName: { type: ['string', 'null'] },
                      surname: { type: 'string' },
                      birthday: { format: 'date-time', type: 'string' },
                      countryPassport: { type: 'string' },
                      identificationDocuments: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            investorEntityDocument: {
                              type: 'object',
                              properties: { id: { type: 'string' }, name: { type: 'string' } },
                              required: ['id', 'name'],
                            },
                          },
                          required: ['investorEntityDocument'],
                        },
                      },
                    },
                    required: [
                      'title',
                      'name',
                      'middleName',
                      'surname',
                      'birthday',
                      'countryPassport',
                      'identificationDocuments',
                    ],
                  },
                  companyEntity: {
                    type: 'object',
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['Proprietary', 'Public', 'Private'],
                        description: '`Proprietary` `Public` `Private`',
                      },
                      name: { type: 'string' },
                      tradingName: { type: 'string' },
                      accountDesignation: { type: ['string', 'null'] },
                      abnNumber: { type: 'string' },
                      extractDocuments: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            investorEntityDocument: {
                              type: 'object',
                              properties: { id: { type: 'string' }, name: { type: 'string' } },
                              required: ['id', 'name'],
                            },
                          },
                          required: ['investorEntityDocument'],
                        },
                      },
                      directorDetail: {
                        type: 'object',
                        properties: {
                          name: { type: 'string' },
                          birthday: { format: 'date-time', type: 'string' },
                          countryBirth: { type: 'string' },
                          identificationDocuments: {
                            type: 'array',
                            items: {
                              type: 'object',
                              properties: {
                                investorEntityDocument: {
                                  type: 'object',
                                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                                  required: ['id', 'name'],
                                },
                              },
                              required: ['investorEntityDocument'],
                            },
                          },
                        },
                        required: ['name', 'birthday', 'countryBirth', 'identificationDocuments'],
                      },
                    },
                    required: [
                      'type',
                      'name',
                      'tradingName',
                      'accountDesignation',
                      'abnNumber',
                      'extractDocuments',
                      'directorDetail',
                    ],
                  },
                  trustEntity: {
                    type: 'object',
                    properties: {
                      type: { type: 'string' },
                      name: { type: 'string' },
                      tradingName: { type: 'string' },
                      accountDesignation: { type: ['string', 'null'] },
                      abnNumber: { type: 'string' },
                      uboList: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            id: { type: 'string' },
                            name: { type: 'string' },
                            birthday: { format: 'date-time', type: 'string' },
                            countryBirth: { type: 'string' },
                            identificationDocuments: {
                              type: 'array',
                              items: {
                                type: 'object',
                                properties: {
                                  investorEntityDocument: {
                                    type: 'object',
                                    properties: {
                                      id: { type: 'string' },
                                      name: { type: 'string' },
                                    },
                                    required: ['id', 'name'],
                                  },
                                },
                                required: ['investorEntityDocument'],
                              },
                            },
                          },
                          required: [
                            'id',
                            'name',
                            'birthday',
                            'countryBirth',
                            'identificationDocuments',
                          ],
                        },
                      },
                      deedDocuments: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            investorEntityDocument: {
                              type: 'object',
                              properties: { id: { type: 'string' }, name: { type: 'string' } },
                              required: ['id', 'name'],
                            },
                          },
                          required: ['investorEntityDocument'],
                        },
                      },
                    },
                    required: [
                      'type',
                      'name',
                      'tradingName',
                      'accountDesignation',
                      'abnNumber',
                      'uboList',
                      'deedDocuments',
                    ],
                  },
                },
                required: [
                  'type',
                  'address',
                  'id',
                  'isApproved',
                  'ccEmail',
                  'taxFile',
                  'finclearAccountNumber',
                  'primaryCountry',
                  'dvp',
                ],
              },
            },
            user: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                email: { type: 'string' },
                firstName: { type: 'string' },
                middleName: { type: ['string', 'null'] },
                lastName: { type: 'string' },
                title: { type: ['string', 'null'] },
                picture: { type: ['string', 'null'] },
                phoneNumber: {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'string',
                      description: 'Phone number',
                      examples: ['0400000000'],
                    },
                    countryCode: {
                      type: 'string',
                      minLength: 1,
                      maxLength: 4,
                      description: 'Country code',
                      examples: ['61'],
                    },
                  },
                  required: ['number', 'countryCode'],
                },
              },
              required: [
                'id',
                'email',
                'firstName',
                'middleName',
                'lastName',
                'title',
                'picture',
                'phoneNumber',
              ],
            },
            individualInvestor: {
              type: 'object',
              properties: {
                sophisticatedInvestorDocument: {
                  type: 'object',
                  properties: {
                    isApproved: { type: 'boolean' },
                    expiresAt: { format: 'date-time', type: 'string' },
                    document: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                      required: ['id', 'name'],
                    },
                  },
                  required: ['isApproved', 'expiresAt'],
                },
              },
            },
            brokerInvestor: {
              type: 'object',
              properties: {
                afslFormDocument: {
                  type: 'object',
                  properties: {
                    isApproved: { type: 'boolean' },
                    expiresAt: { format: 'date-time', type: 'string' },
                    document: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                      required: ['id', 'name'],
                    },
                  },
                  required: ['isApproved', 'expiresAt', 'document'],
                },
              },
              required: ['afslFormDocument'],
            },
          },
          required: [
            'rating',
            'status',
            'investmentMinSize',
            'investmentMaxSize',
            'isIdentificationDocumentApproved',
            'isApproved',
            'identificationDocuments',
            'entities',
            'user',
          ],
        },
        authenticationCode: { type: 'string' },
      },
      required: ['investor', 'authenticationCode'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorAuthSignUpFirstStep = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          email: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['email'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorAuthSignUpSecondStep = {
  body: {
    type: 'object',
    properties: {
      user: {
        type: 'object',
        properties: {
          email: { type: 'string' },
          phoneNumber: {
            type: 'object',
            properties: {
              number: { type: 'string', description: 'Phone number', examples: ['0400000000'] },
              countryCode: {
                type: 'string',
                minLength: 1,
                maxLength: 4,
                description: 'Country code',
                examples: ['61'],
              },
            },
            required: ['number', 'countryCode'],
          },
          password: { type: 'string' },
          firstName: { type: 'string' },
          middleName: { type: ['string', 'null'] },
          lastName: { type: 'string' },
          title: { type: ['string', 'null'] },
          picture: { type: ['string', 'null'] },
        },
        required: [
          'email',
          'phoneNumber',
          'password',
          'firstName',
          'middleName',
          'lastName',
          'title',
          'picture',
        ],
      },
      code: { type: 'string' },
    },
    required: ['user', 'code'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        investor: {
          type: 'object',
          properties: {
            rating: { type: 'number', minimum: 1 },
            status: {
              type: 'string',
              enum: ['Approved', 'Pending', 'Restrict'],
              description: '`Approved` `Pending` `Restrict`',
            },
            investmentMinSize: { type: ['number', 'null'], minimum: 1 },
            investmentMaxSize: { type: ['number', 'null'], minimum: 1 },
            isIdentificationDocumentApproved: { type: 'boolean' },
            isApproved: { type: 'boolean' },
            identificationDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  document: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['document'],
              },
            },
            entities: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['IndividualJoint', 'Company', 'SuperTrust'],
                    description: '`IndividualJoint` `Company` `SuperTrust`',
                  },
                  address: { type: 'string' },
                  id: { type: 'string' },
                  isApproved: { type: 'boolean' },
                  ccEmail: { type: 'string' },
                  taxFile: { type: ['string', 'null'], minLength: 9 },
                  finclearAccountNumber: { type: ['string', 'null'] },
                  primaryCountry: { type: 'string' },
                  dvp: {
                    type: 'object',
                    properties: {
                      hin: { type: 'string' },
                      brokerIdentification: {
                        type: 'object',
                        properties: {
                          pid: { type: 'string' },
                          broker: {
                            type: 'object',
                            properties: { name: { type: ['string', 'null'] } },
                            required: ['name'],
                          },
                        },
                        required: ['pid', 'broker'],
                      },
                    },
                    required: ['hin', 'brokerIdentification'],
                  },
                  individualEntity: {
                    type: 'object',
                    properties: {
                      title: { type: 'string' },
                      name: { type: 'string' },
                      middleName: { type: ['string', 'null'] },
                      surname: { type: 'string' },
                      birthday: { format: 'date-time', type: 'string' },
                      countryPassport: { type: 'string' },
                      identificationDocuments: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            investorEntityDocument: {
                              type: 'object',
                              properties: { id: { type: 'string' }, name: { type: 'string' } },
                              required: ['id', 'name'],
                            },
                          },
                          required: ['investorEntityDocument'],
                        },
                      },
                    },
                    required: [
                      'title',
                      'name',
                      'middleName',
                      'surname',
                      'birthday',
                      'countryPassport',
                      'identificationDocuments',
                    ],
                  },
                  companyEntity: {
                    type: 'object',
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['Proprietary', 'Public', 'Private'],
                        description: '`Proprietary` `Public` `Private`',
                      },
                      name: { type: 'string' },
                      tradingName: { type: 'string' },
                      accountDesignation: { type: ['string', 'null'] },
                      abnNumber: { type: 'string' },
                      extractDocuments: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            investorEntityDocument: {
                              type: 'object',
                              properties: { id: { type: 'string' }, name: { type: 'string' } },
                              required: ['id', 'name'],
                            },
                          },
                          required: ['investorEntityDocument'],
                        },
                      },
                      directorDetail: {
                        type: 'object',
                        properties: {
                          name: { type: 'string' },
                          birthday: { format: 'date-time', type: 'string' },
                          countryBirth: { type: 'string' },
                          identificationDocuments: {
                            type: 'array',
                            items: {
                              type: 'object',
                              properties: {
                                investorEntityDocument: {
                                  type: 'object',
                                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                                  required: ['id', 'name'],
                                },
                              },
                              required: ['investorEntityDocument'],
                            },
                          },
                        },
                        required: ['name', 'birthday', 'countryBirth', 'identificationDocuments'],
                      },
                    },
                    required: [
                      'type',
                      'name',
                      'tradingName',
                      'accountDesignation',
                      'abnNumber',
                      'extractDocuments',
                      'directorDetail',
                    ],
                  },
                  trustEntity: {
                    type: 'object',
                    properties: {
                      type: { type: 'string' },
                      name: { type: 'string' },
                      tradingName: { type: 'string' },
                      accountDesignation: { type: ['string', 'null'] },
                      abnNumber: { type: 'string' },
                      uboList: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            id: { type: 'string' },
                            name: { type: 'string' },
                            birthday: { format: 'date-time', type: 'string' },
                            countryBirth: { type: 'string' },
                            identificationDocuments: {
                              type: 'array',
                              items: {
                                type: 'object',
                                properties: {
                                  investorEntityDocument: {
                                    type: 'object',
                                    properties: {
                                      id: { type: 'string' },
                                      name: { type: 'string' },
                                    },
                                    required: ['id', 'name'],
                                  },
                                },
                                required: ['investorEntityDocument'],
                              },
                            },
                          },
                          required: [
                            'id',
                            'name',
                            'birthday',
                            'countryBirth',
                            'identificationDocuments',
                          ],
                        },
                      },
                      deedDocuments: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            investorEntityDocument: {
                              type: 'object',
                              properties: { id: { type: 'string' }, name: { type: 'string' } },
                              required: ['id', 'name'],
                            },
                          },
                          required: ['investorEntityDocument'],
                        },
                      },
                    },
                    required: [
                      'type',
                      'name',
                      'tradingName',
                      'accountDesignation',
                      'abnNumber',
                      'uboList',
                      'deedDocuments',
                    ],
                  },
                },
                required: [
                  'type',
                  'address',
                  'id',
                  'isApproved',
                  'ccEmail',
                  'taxFile',
                  'finclearAccountNumber',
                  'primaryCountry',
                  'dvp',
                ],
              },
            },
            user: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                email: { type: 'string' },
                firstName: { type: 'string' },
                middleName: { type: ['string', 'null'] },
                lastName: { type: 'string' },
                title: { type: ['string', 'null'] },
                picture: { type: ['string', 'null'] },
                phoneNumber: {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'string',
                      description: 'Phone number',
                      examples: ['0400000000'],
                    },
                    countryCode: {
                      type: 'string',
                      minLength: 1,
                      maxLength: 4,
                      description: 'Country code',
                      examples: ['61'],
                    },
                  },
                  required: ['number', 'countryCode'],
                },
              },
              required: [
                'id',
                'email',
                'firstName',
                'middleName',
                'lastName',
                'title',
                'picture',
                'phoneNumber',
              ],
            },
            individualInvestor: {
              type: 'object',
              properties: {
                sophisticatedInvestorDocument: {
                  type: 'object',
                  properties: {
                    isApproved: { type: 'boolean' },
                    expiresAt: { format: 'date-time', type: 'string' },
                    document: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                      required: ['id', 'name'],
                    },
                  },
                  required: ['isApproved', 'expiresAt'],
                },
              },
            },
            brokerInvestor: {
              type: 'object',
              properties: {
                afslFormDocument: {
                  type: 'object',
                  properties: {
                    isApproved: { type: 'boolean' },
                    expiresAt: { format: 'date-time', type: 'string' },
                    document: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                      required: ['id', 'name'],
                    },
                  },
                  required: ['isApproved', 'expiresAt', 'document'],
                },
              },
              required: ['afslFormDocument'],
            },
          },
          required: [
            'rating',
            'status',
            'investmentMinSize',
            'investmentMaxSize',
            'isIdentificationDocumentApproved',
            'isApproved',
            'identificationDocuments',
            'entities',
            'user',
          ],
        },
        authenticationCode: { type: 'string' },
      },
      required: ['investor', 'authenticationCode'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorDealFind = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['dealId', 'investorId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['Placement', 'MarketPlacement', 'Ipo', 'UnlistedInvestment'],
          description: '`Placement` `MarketPlacement` `Ipo` `UnlistedInvestment`',
        },
        id: { type: 'string' },
        createdAt: { format: 'date-time', type: 'string' },
        number: { type: 'string' },
        isActive: { type: 'boolean' },
        company: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            industry: { type: 'string' },
            logo: { type: ['string', 'null'] },
            asxCompany: {
              type: 'object',
              properties: { code: { type: 'string' } },
              required: ['code'],
            },
          },
          required: ['id', 'name', 'industry', 'logo', 'asxCompany'],
        },
        dealInformationDocuments: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              dealDocument: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['dealDocument'],
          },
        },
        behindWallDeal: {
          type: ['object', 'null'],
          required: ['detail', 'terms', 'isActive', 'documents'],
          properties: {
            detail: { type: ['string', 'null'] },
            terms: { type: ['string', 'null'] },
            isActive: { type: 'boolean' },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                required: ['dealDocument'],
                properties: {
                  dealDocument: {
                    type: 'object',
                    required: ['id', 'name'],
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                  },
                },
              },
            },
            investorsAgreedTerms: {
              type: 'array',
              items: {
                type: 'object',
                required: ['investorId'],
                properties: { investorId: { type: 'string' } },
              },
            },
          },
        },
        ipoDeal: {
          type: 'object',
          properties: {
            ipoPrice: { type: ['number', 'null'] },
            ipoRaiseAmount: { type: ['number', 'null'] },
            hasLeadBroker: { type: 'boolean' },
            brokerName: { type: ['string', 'null'] },
            listingDate: { format: 'date-time', type: ['string', 'null'] },
            closeDate: { format: 'date-time', type: ['string', 'null'] },
            marketCap: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['TermSheets', 'IpoPresentation', 'IpoProspectus'],
                    description: '`TermSheets` `IpoPresentation` `IpoProspectus`',
                  },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['ipoRaiseAmount', 'summary', 'documents'],
        },
        unlistedDeal: {
          type: 'object',
          properties: {
            preIpoPrice: { type: 'number' },
            preIpoRaiseAmount: { type: 'number' },
            hasLeadBroker: { type: 'boolean' },
            brokerName: { type: ['string', 'null'] },
            closeDate: { format: 'date-time', type: ['string', 'null'] },
            valuation: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['TermSheets', 'PreIpoPresentation'],
                    description: '`TermSheets` `PreIpoPresentation`',
                  },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['preIpoPrice', 'preIpoRaiseAmount', 'valueToBroker', 'summary', 'documents'],
        },
        placementDeal: {
          type: 'object',
          properties: {
            capitalRaisePrice: { type: 'number' },
            optionCode: { type: ['string', 'null'] },
            lastTradedPrice: { type: ['number', 'null'] },
            marketCap: { type: ['number', 'null'] },
            discountPercentage: { type: ['number', 'null'] },
            valueToBroker: { type: 'number' },
            summary: { type: ['string', 'null'] },
            dealOption: {
              type: 'object',
              properties: {
                exercisePrice: { type: ['number', 'null'] },
                id: { type: 'string' },
                numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                expiresAt: { format: 'date-time', type: ['string', 'null'] },
                detail: { type: ['string', 'null'] },
              },
              required: ['exercisePrice', 'id', 'numerator', 'denominator', 'expiresAt', 'detail'],
            },
            keyDate: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                bidDate: { format: 'date-time', type: ['string', 'null'] },
                bidTime: { format: 'date-time', type: ['string', 'null'] },
                settlementDate: { format: 'date-time', type: ['string', 'null'] },
              },
              required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
            },
            extraDetail: {
              type: 'object',
              properties: {
                minimumBid: { type: ['number', 'null'] },
                id: { type: 'string' },
                companyDescription: { type: ['string', 'null'] },
                investmentHighlights: { type: ['string', 'null'] },
                summaryContinued: { type: ['string', 'null'] },
                useProceeds: { type: ['string', 'null'] },
              },
              required: [
                'minimumBid',
                'id',
                'companyDescription',
                'investmentHighlights',
                'summaryContinued',
                'useProceeds',
              ],
            },
            documents: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: { type: 'string', enum: ['TermSheets'], description: '`TermSheets`' },
                  dealDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['type', 'dealDocument'],
              },
            },
          },
          required: ['capitalRaisePrice', 'summary', 'documents'],
        },
        marketPlacementDeal: {
          type: 'object',
          properties: { lastTradedPrice: { type: ['number', 'null'] } },
          required: ['lastTradedPrice'],
        },
        dealInvestorGroups: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              investorGroup: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['investorGroup'],
          },
        },
        logs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              event: {
                type: 'string',
                enum: ['DealCreated', 'BidPlaced', 'BidsClosed', 'DealComplete'],
                description: '`DealCreated` `BidPlaced` `BidsClosed` `DealComplete`',
              },
              id: { type: 'string' },
              createdAt: { format: 'date-time', type: 'string' },
            },
            required: ['event', 'id', 'createdAt'],
          },
        },
        bids: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              dealId: { type: 'string' },
              entityBids: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    investmentAmount: { type: 'number' },
                    investorEntityId: { type: 'string' },
                    isAllocated: { type: 'boolean' },
                  },
                  required: ['investmentAmount', 'investorEntityId', 'isAllocated'],
                },
              },
            },
            required: ['id', 'dealId', 'entityBids'],
          },
        },
      },
      required: [
        'type',
        'id',
        'createdAt',
        'number',
        'isActive',
        'company',
        'dealInformationDocuments',
        'dealInvestorGroups',
        'bids',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorDealList = {
  body: {
    type: 'object',
    properties: {
      filter: {
        type: 'string',
        description: 'Search by company name, ASX company, or deal number',
      },
      type: {
        type: 'string',
        enum: ['Placement', 'MarketPlacement', 'Ipo', 'UnlistedInvestment'],
        description: 'Filter for only the specified deal type',
      },
      logCurrentEvent: {
        type: 'array',
        description: 'Array of deal events that have to match with the latest log',
        items: { type: 'string', enum: ['DealCreated', 'BidsClosed', 'DealComplete'] },
      },
      hasBidden: {
        type: 'boolean',
        description:
          'Filter for deals whether they have been bidden by the investor. It is applied with "investorId" filter',
      },
      isInterestedBidder: {
        type: 'boolean',
        description:
          'Returns all deals that the investor is interested in. It is applied with "investorId" filter',
      },
      page: { type: 'number', minimum: 1 },
      perPage: { type: 'number', minimum: 1 },
    },
    required: ['page', 'perPage'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                enum: ['Placement', 'MarketPlacement', 'Ipo', 'UnlistedInvestment'],
                description: '`Placement` `MarketPlacement` `Ipo` `UnlistedInvestment`',
              },
              bids: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    entityBids: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          investmentAmount: { type: 'number' },
                          investorEntityId: { type: 'string' },
                          isAllocated: { type: 'boolean' },
                          investorEntity: {
                            type: 'object',
                            properties: {
                              type: {
                                type: 'string',
                                enum: ['IndividualJoint', 'Company', 'SuperTrust'],
                                description: '`IndividualJoint` `Company` `SuperTrust`',
                              },
                              address: { type: 'string' },
                              id: { type: 'string' },
                              isApproved: { type: 'boolean' },
                              ccEmail: { type: 'string' },
                              taxFile: { type: ['string', 'null'], minLength: 9 },
                              finclearAccountNumber: { type: ['string', 'null'] },
                              primaryCountry: { type: 'string' },
                              dvp: {
                                type: 'object',
                                properties: {
                                  hin: { type: 'string' },
                                  brokerIdentification: {
                                    type: 'object',
                                    properties: {
                                      pid: { type: 'string' },
                                      broker: {
                                        type: 'object',
                                        properties: { name: { type: ['string', 'null'] } },
                                        required: ['name'],
                                      },
                                    },
                                    required: ['pid', 'broker'],
                                  },
                                },
                                required: ['hin', 'brokerIdentification'],
                              },
                              individualEntity: {
                                type: 'object',
                                properties: {
                                  title: { type: 'string' },
                                  name: { type: 'string' },
                                  middleName: { type: ['string', 'null'] },
                                  surname: { type: 'string' },
                                  birthday: { format: 'date-time', type: 'string' },
                                  countryPassport: { type: 'string' },
                                  identificationDocuments: {
                                    type: 'array',
                                    items: {
                                      type: 'object',
                                      properties: {
                                        investorEntityDocument: {
                                          type: 'object',
                                          properties: {
                                            id: { type: 'string' },
                                            name: { type: 'string' },
                                          },
                                          required: ['id', 'name'],
                                        },
                                      },
                                      required: ['investorEntityDocument'],
                                    },
                                  },
                                },
                                required: [
                                  'title',
                                  'name',
                                  'middleName',
                                  'surname',
                                  'birthday',
                                  'countryPassport',
                                  'identificationDocuments',
                                ],
                              },
                              companyEntity: {
                                type: 'object',
                                properties: {
                                  type: {
                                    type: 'string',
                                    enum: ['Proprietary', 'Public', 'Private'],
                                    description: '`Proprietary` `Public` `Private`',
                                  },
                                  name: { type: 'string' },
                                  tradingName: { type: 'string' },
                                  accountDesignation: { type: ['string', 'null'] },
                                  abnNumber: { type: 'string' },
                                  extractDocuments: {
                                    type: 'array',
                                    items: {
                                      type: 'object',
                                      properties: {
                                        investorEntityDocument: {
                                          type: 'object',
                                          properties: {
                                            id: { type: 'string' },
                                            name: { type: 'string' },
                                          },
                                          required: ['id', 'name'],
                                        },
                                      },
                                      required: ['investorEntityDocument'],
                                    },
                                  },
                                  directorDetail: {
                                    type: 'object',
                                    properties: {
                                      name: { type: 'string' },
                                      birthday: { format: 'date-time', type: 'string' },
                                      countryBirth: { type: 'string' },
                                      identificationDocuments: {
                                        type: 'array',
                                        items: {
                                          type: 'object',
                                          properties: {
                                            investorEntityDocument: {
                                              type: 'object',
                                              properties: {
                                                id: { type: 'string' },
                                                name: { type: 'string' },
                                              },
                                              required: ['id', 'name'],
                                            },
                                          },
                                          required: ['investorEntityDocument'],
                                        },
                                      },
                                    },
                                    required: [
                                      'name',
                                      'birthday',
                                      'countryBirth',
                                      'identificationDocuments',
                                    ],
                                  },
                                },
                                required: [
                                  'type',
                                  'name',
                                  'tradingName',
                                  'accountDesignation',
                                  'abnNumber',
                                  'extractDocuments',
                                  'directorDetail',
                                ],
                              },
                              trustEntity: {
                                type: 'object',
                                properties: {
                                  type: { type: 'string' },
                                  name: { type: 'string' },
                                  tradingName: { type: 'string' },
                                  accountDesignation: { type: ['string', 'null'] },
                                  abnNumber: { type: 'string' },
                                  uboList: {
                                    type: 'array',
                                    items: {
                                      type: 'object',
                                      properties: {
                                        id: { type: 'string' },
                                        name: { type: 'string' },
                                        birthday: { format: 'date-time', type: 'string' },
                                        countryBirth: { type: 'string' },
                                        identificationDocuments: {
                                          type: 'array',
                                          items: {
                                            type: 'object',
                                            properties: {
                                              investorEntityDocument: {
                                                type: 'object',
                                                properties: {
                                                  id: { type: 'string' },
                                                  name: { type: 'string' },
                                                },
                                                required: ['id', 'name'],
                                              },
                                            },
                                            required: ['investorEntityDocument'],
                                          },
                                        },
                                      },
                                      required: [
                                        'id',
                                        'name',
                                        'birthday',
                                        'countryBirth',
                                        'identificationDocuments',
                                      ],
                                    },
                                  },
                                  deedDocuments: {
                                    type: 'array',
                                    items: {
                                      type: 'object',
                                      properties: {
                                        investorEntityDocument: {
                                          type: 'object',
                                          properties: {
                                            id: { type: 'string' },
                                            name: { type: 'string' },
                                          },
                                          required: ['id', 'name'],
                                        },
                                      },
                                      required: ['investorEntityDocument'],
                                    },
                                  },
                                },
                                required: [
                                  'type',
                                  'name',
                                  'tradingName',
                                  'accountDesignation',
                                  'abnNumber',
                                  'uboList',
                                  'deedDocuments',
                                ],
                              },
                            },
                            required: [
                              'type',
                              'address',
                              'id',
                              'isApproved',
                              'ccEmail',
                              'taxFile',
                              'finclearAccountNumber',
                              'primaryCountry',
                              'dvp',
                            ],
                          },
                        },
                        required: [
                          'investmentAmount',
                          'investorEntityId',
                          'isAllocated',
                          'investorEntity',
                        ],
                      },
                    },
                    id: { type: 'string' },
                    dealId: { type: 'string' },
                  },
                  required: ['entityBids', 'id', 'dealId'],
                },
              },
              ipoDeal: {
                type: 'object',
                properties: {
                  ipoPrice: { type: ['number', 'null'] },
                  ipoRaiseAmount: { type: ['number', 'null'] },
                  hasLeadBroker: { type: 'boolean' },
                  brokerName: { type: ['string', 'null'] },
                  listingDate: { format: 'date-time', type: ['string', 'null'] },
                  closeDate: { format: 'date-time', type: ['string', 'null'] },
                  marketCap: { type: ['number', 'null'] },
                  summary: { type: ['string', 'null'] },
                  dealOption: {
                    type: 'object',
                    properties: {
                      exercisePrice: { type: ['number', 'null'] },
                      id: { type: 'string' },
                      numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                      denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                      expiresAt: { format: 'date-time', type: ['string', 'null'] },
                      detail: { type: ['string', 'null'] },
                    },
                    required: [
                      'exercisePrice',
                      'id',
                      'numerator',
                      'denominator',
                      'expiresAt',
                      'detail',
                    ],
                  },
                  keyDate: {
                    type: 'object',
                    properties: {
                      id: { type: 'string' },
                      bidDate: { format: 'date-time', type: ['string', 'null'] },
                      bidTime: { format: 'date-time', type: ['string', 'null'] },
                      settlementDate: { format: 'date-time', type: ['string', 'null'] },
                    },
                    required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
                  },
                  extraDetail: {
                    type: 'object',
                    properties: {
                      minimumBid: { type: ['number', 'null'] },
                      id: { type: 'string' },
                      companyDescription: { type: ['string', 'null'] },
                      investmentHighlights: { type: ['string', 'null'] },
                      summaryContinued: { type: ['string', 'null'] },
                      useProceeds: { type: ['string', 'null'] },
                    },
                    required: [
                      'minimumBid',
                      'id',
                      'companyDescription',
                      'investmentHighlights',
                      'summaryContinued',
                      'useProceeds',
                    ],
                  },
                  documents: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['TermSheets', 'IpoPresentation', 'IpoProspectus'],
                          description: '`TermSheets` `IpoPresentation` `IpoProspectus`',
                        },
                        dealDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['type', 'dealDocument'],
                    },
                  },
                },
                required: ['ipoRaiseAmount', 'summary', 'documents'],
              },
              placementDeal: {
                type: 'object',
                properties: {
                  capitalRaisePrice: { type: 'number' },
                  optionCode: { type: ['string', 'null'] },
                  lastTradedPrice: { type: ['number', 'null'] },
                  marketCap: { type: ['number', 'null'] },
                  discountPercentage: { type: ['number', 'null'] },
                  summary: { type: ['string', 'null'] },
                  dealOption: {
                    type: 'object',
                    properties: {
                      exercisePrice: { type: ['number', 'null'] },
                      id: { type: 'string' },
                      numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                      denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                      expiresAt: { format: 'date-time', type: ['string', 'null'] },
                      detail: { type: ['string', 'null'] },
                    },
                    required: [
                      'exercisePrice',
                      'id',
                      'numerator',
                      'denominator',
                      'expiresAt',
                      'detail',
                    ],
                  },
                  keyDate: {
                    type: 'object',
                    properties: {
                      id: { type: 'string' },
                      bidDate: { format: 'date-time', type: ['string', 'null'] },
                      bidTime: { format: 'date-time', type: ['string', 'null'] },
                      settlementDate: { format: 'date-time', type: ['string', 'null'] },
                    },
                    required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
                  },
                  extraDetail: {
                    type: 'object',
                    properties: {
                      minimumBid: { type: ['number', 'null'] },
                      id: { type: 'string' },
                      companyDescription: { type: ['string', 'null'] },
                      investmentHighlights: { type: ['string', 'null'] },
                      summaryContinued: { type: ['string', 'null'] },
                      useProceeds: { type: ['string', 'null'] },
                    },
                    required: [
                      'minimumBid',
                      'id',
                      'companyDescription',
                      'investmentHighlights',
                      'summaryContinued',
                      'useProceeds',
                    ],
                  },
                  documents: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        type: { type: 'string', enum: ['TermSheets'], description: '`TermSheets`' },
                        dealDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['type', 'dealDocument'],
                    },
                  },
                },
                required: ['capitalRaisePrice', 'summary', 'documents'],
              },
              unlistedDeal: {
                type: 'object',
                properties: {
                  preIpoPrice: { type: 'number' },
                  preIpoRaiseAmount: { type: 'number' },
                  hasLeadBroker: { type: 'boolean' },
                  brokerName: { type: ['string', 'null'] },
                  closeDate: { format: 'date-time', type: ['string', 'null'] },
                  valuation: { type: ['number', 'null'] },
                  summary: { type: ['string', 'null'] },
                  dealOption: {
                    type: 'object',
                    properties: {
                      exercisePrice: { type: ['number', 'null'] },
                      id: { type: 'string' },
                      numerator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                      denominator: { type: ['number', 'null'], minimum: 1, maximum: 255 },
                      expiresAt: { format: 'date-time', type: ['string', 'null'] },
                      detail: { type: ['string', 'null'] },
                    },
                    required: [
                      'exercisePrice',
                      'id',
                      'numerator',
                      'denominator',
                      'expiresAt',
                      'detail',
                    ],
                  },
                  keyDate: {
                    type: 'object',
                    properties: {
                      id: { type: 'string' },
                      bidDate: { format: 'date-time', type: ['string', 'null'] },
                      bidTime: { format: 'date-time', type: ['string', 'null'] },
                      settlementDate: { format: 'date-time', type: ['string', 'null'] },
                    },
                    required: ['id', 'bidDate', 'bidTime', 'settlementDate'],
                  },
                  extraDetail: {
                    type: 'object',
                    properties: {
                      minimumBid: { type: ['number', 'null'] },
                      id: { type: 'string' },
                      companyDescription: { type: ['string', 'null'] },
                      investmentHighlights: { type: ['string', 'null'] },
                      summaryContinued: { type: ['string', 'null'] },
                      useProceeds: { type: ['string', 'null'] },
                    },
                    required: [
                      'minimumBid',
                      'id',
                      'companyDescription',
                      'investmentHighlights',
                      'summaryContinued',
                      'useProceeds',
                    ],
                  },
                  documents: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['TermSheets', 'PreIpoPresentation'],
                          description: '`TermSheets` `PreIpoPresentation`',
                        },
                        dealDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['type', 'dealDocument'],
                    },
                  },
                },
                required: ['preIpoPrice', 'preIpoRaiseAmount', 'summary', 'documents'],
              },
              id: { type: 'string' },
              createdAt: { format: 'date-time', type: 'string' },
              number: { type: 'string' },
              isActive: { type: 'boolean' },
              company: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                  industry: { type: 'string' },
                  logo: { type: ['string', 'null'] },
                  asxCompany: {
                    type: 'object',
                    properties: { code: { type: 'string' } },
                    required: ['code'],
                  },
                },
                required: ['id', 'name', 'industry', 'logo', 'asxCompany'],
              },
              dealInformationDocuments: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    dealDocument: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                      required: ['id', 'name'],
                    },
                  },
                  required: ['dealDocument'],
                },
              },
              behindWallDeal: {
                type: ['object', 'null'],
                required: ['detail', 'terms', 'isActive', 'documents'],
                properties: {
                  detail: { type: ['string', 'null'] },
                  terms: { type: ['string', 'null'] },
                  isActive: { type: 'boolean' },
                  documents: {
                    type: 'array',
                    items: {
                      type: 'object',
                      required: ['dealDocument'],
                      properties: {
                        dealDocument: {
                          type: 'object',
                          required: ['id', 'name'],
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                        },
                      },
                    },
                  },
                  investorsAgreedTerms: {
                    type: 'array',
                    items: {
                      type: 'object',
                      required: ['investorId'],
                      properties: { investorId: { type: 'string' } },
                    },
                  },
                },
              },
              marketPlacementDeal: {
                type: 'object',
                properties: { lastTradedPrice: { type: ['number', 'null'] } },
                required: ['lastTradedPrice'],
              },
              dealInvestorGroups: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    investorGroup: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                      required: ['id', 'name'],
                    },
                  },
                  required: ['investorGroup'],
                },
              },
              logs: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    event: {
                      type: 'string',
                      enum: ['DealCreated', 'BidPlaced', 'BidsClosed', 'DealComplete'],
                      description: '`DealCreated` `BidPlaced` `BidsClosed` `DealComplete`',
                    },
                    id: { type: 'string' },
                    createdAt: { format: 'date-time', type: 'string' },
                  },
                  required: ['event', 'id', 'createdAt'],
                },
              },
            },
            required: [
              'type',
              'bids',
              'ipoDeal',
              'placementDeal',
              'unlistedDeal',
              'id',
              'createdAt',
              'number',
              'isActive',
              'company',
              'dealInformationDocuments',
              'dealInvestorGroups',
            ],
          },
        },
        pagination: {
          type: 'object',
          properties: {
            total: { type: 'number' },
            lastPage: { type: 'number' },
            currentPage: { type: 'number' },
            perPage: { type: 'number' },
            from: { type: 'number' },
            to: { type: 'number' },
          },
          required: ['total', 'lastPage', 'currentPage', 'perPage', 'from', 'to'],
        },
      },
      required: ['data', 'pagination'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorDealSubmitInterest = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['dealId', 'investorId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: { marketPlacementDealId: { type: 'string' }, investorId: { type: 'string' } },
      required: ['marketPlacementDealId', 'investorId'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorEntityCreate = {
  body: {
    type: 'object',
    properties: {
      type: { type: 'string', enum: ['IndividualJoint', 'Company', 'SuperTrust'] },
      address: { type: 'string' },
      ccEmail: { type: 'string' },
      taxFile: { type: ['string', 'null'], minLength: 9 },
      primaryCountry: { type: 'string' },
      dvp: {
        type: 'object',
        properties: { hin: { type: 'string' }, brokerPid: { type: 'string' } },
        required: ['hin', 'brokerPid'],
      },
      trustEntity: {
        type: 'object',
        properties: {
          deedDocuments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                investorEntityDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['investorEntityDocument'],
            },
          },
          uboList: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                identificationDocuments: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      investorEntityDocument: {
                        type: 'object',
                        properties: { name: { type: 'string' } },
                        required: ['name'],
                      },
                    },
                    required: ['investorEntityDocument'],
                  },
                },
                name: { type: 'string' },
                birthday: { format: 'date-time', type: 'string' },
                countryBirth: { type: 'string' },
              },
              required: ['identificationDocuments', 'name', 'birthday', 'countryBirth'],
            },
          },
          type: { type: 'string' },
          name: { type: 'string' },
          tradingName: { type: 'string' },
          accountDesignation: { type: ['string', 'null'] },
          abnNumber: { type: 'string' },
        },
        required: [
          'deedDocuments',
          'uboList',
          'type',
          'name',
          'tradingName',
          'accountDesignation',
          'abnNumber',
        ],
      },
      individualEntity: {
        type: 'object',
        properties: {
          identificationDocuments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                investorEntityDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['investorEntityDocument'],
            },
          },
          title: { type: 'string' },
          name: { type: 'string' },
          middleName: { type: ['string', 'null'] },
          surname: { type: 'string' },
          birthday: { format: 'date-time', type: 'string' },
          countryPassport: { type: 'string' },
        },
        required: [
          'identificationDocuments',
          'title',
          'name',
          'middleName',
          'surname',
          'birthday',
          'countryPassport',
        ],
      },
      companyEntity: {
        type: 'object',
        properties: {
          type: { type: 'string', enum: ['Proprietary', 'Public', 'Private'] },
          extractDocuments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                investorEntityDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['investorEntityDocument'],
            },
          },
          directorDetail: {
            type: 'object',
            properties: {
              identificationDocuments: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    investorEntityDocument: {
                      type: 'object',
                      properties: { name: { type: 'string' } },
                      required: ['name'],
                    },
                  },
                  required: ['investorEntityDocument'],
                },
              },
              name: { type: 'string' },
              birthday: { format: 'date-time', type: 'string' },
              countryBirth: { type: 'string' },
            },
            required: ['identificationDocuments', 'name', 'birthday', 'countryBirth'],
          },
          name: { type: 'string' },
          tradingName: { type: 'string' },
          accountDesignation: { type: ['string', 'null'] },
          abnNumber: { type: 'string' },
        },
        required: [
          'type',
          'extractDocuments',
          'directorDetail',
          'name',
          'tradingName',
          'accountDesignation',
          'abnNumber',
        ],
      },
    },
    required: ['type', 'address', 'ccEmail', 'taxFile', 'primaryCountry', 'dvp'],
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['IndividualJoint', 'Company', 'SuperTrust'],
          description: '`IndividualJoint` `Company` `SuperTrust`',
        },
        address: { type: 'string' },
        id: { type: 'string' },
        isApproved: { type: 'boolean' },
        ccEmail: { type: 'string' },
        taxFile: { type: ['string', 'null'], minLength: 9 },
        finclearAccountNumber: { type: ['string', 'null'] },
        primaryCountry: { type: 'string' },
        dvp: {
          type: 'object',
          properties: {
            hin: { type: 'string' },
            brokerIdentification: {
              type: 'object',
              properties: {
                pid: { type: 'string' },
                broker: {
                  type: 'object',
                  properties: { name: { type: ['string', 'null'] } },
                  required: ['name'],
                },
              },
              required: ['pid', 'broker'],
            },
          },
          required: ['hin', 'brokerIdentification'],
        },
        individualEntity: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            name: { type: 'string' },
            middleName: { type: ['string', 'null'] },
            surname: { type: 'string' },
            birthday: { format: 'date-time', type: 'string' },
            countryPassport: { type: 'string' },
            identificationDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investorEntityDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['investorEntityDocument'],
              },
            },
          },
          required: [
            'title',
            'name',
            'middleName',
            'surname',
            'birthday',
            'countryPassport',
            'identificationDocuments',
          ],
        },
        companyEntity: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['Proprietary', 'Public', 'Private'],
              description: '`Proprietary` `Public` `Private`',
            },
            name: { type: 'string' },
            tradingName: { type: 'string' },
            accountDesignation: { type: ['string', 'null'] },
            abnNumber: { type: 'string' },
            extractDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investorEntityDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['investorEntityDocument'],
              },
            },
            directorDetail: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                birthday: { format: 'date-time', type: 'string' },
                countryBirth: { type: 'string' },
                identificationDocuments: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      investorEntityDocument: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                        required: ['id', 'name'],
                      },
                    },
                    required: ['investorEntityDocument'],
                  },
                },
              },
              required: ['name', 'birthday', 'countryBirth', 'identificationDocuments'],
            },
          },
          required: [
            'type',
            'name',
            'tradingName',
            'accountDesignation',
            'abnNumber',
            'extractDocuments',
            'directorDetail',
          ],
        },
        trustEntity: {
          type: 'object',
          properties: {
            type: { type: 'string' },
            name: { type: 'string' },
            tradingName: { type: 'string' },
            accountDesignation: { type: ['string', 'null'] },
            abnNumber: { type: 'string' },
            uboList: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                  birthday: { format: 'date-time', type: 'string' },
                  countryBirth: { type: 'string' },
                  identificationDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                },
                required: ['id', 'name', 'birthday', 'countryBirth', 'identificationDocuments'],
              },
            },
            deedDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investorEntityDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['investorEntityDocument'],
              },
            },
          },
          required: [
            'type',
            'name',
            'tradingName',
            'accountDesignation',
            'abnNumber',
            'uboList',
            'deedDocuments',
          ],
        },
      },
      required: [
        'type',
        'address',
        'id',
        'isApproved',
        'ccEmail',
        'taxFile',
        'finclearAccountNumber',
        'primaryCountry',
        'dvp',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorEntityUpdate = {
  body: {
    type: 'object',
    properties: {
      type: { type: 'string', enum: ['IndividualJoint', 'Company', 'SuperTrust'] },
      address: { type: 'string' },
      ccEmail: { type: 'string' },
      taxFile: { type: ['string', 'null'], minLength: 9 },
      primaryCountry: { type: 'string' },
      dvp: {
        type: 'object',
        properties: { hin: { type: 'string' }, brokerPid: { type: 'string' } },
      },
      trustEntity: {
        type: 'object',
        properties: {
          uboList: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                identificationDocuments: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      investorEntityDocument: {
                        type: 'object',
                        properties: { name: { type: 'string' } },
                        required: ['name'],
                      },
                    },
                    required: ['investorEntityDocument'],
                  },
                },
                name: { type: 'string' },
                birthday: { format: 'date-time', type: 'string' },
                countryBirth: { type: 'string' },
                id: { type: 'string' },
              },
              required: ['identificationDocuments', 'name', 'birthday', 'countryBirth'],
            },
          },
          deletedUboIds: { type: 'array', items: { type: 'string' } },
          type: { type: 'string' },
          name: { type: 'string' },
          tradingName: { type: 'string' },
          accountDesignation: { type: ['string', 'null'] },
          abnNumber: { type: 'string' },
          deedDocuments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                investorEntityDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['investorEntityDocument'],
            },
          },
        },
      },
      individualEntity: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          name: { type: 'string' },
          middleName: { type: ['string', 'null'] },
          surname: { type: 'string' },
          birthday: { format: 'date-time', type: 'string' },
          countryPassport: { type: 'string' },
          identificationDocuments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                investorEntityDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['investorEntityDocument'],
            },
          },
        },
      },
      companyEntity: {
        type: 'object',
        properties: {
          type: { type: 'string', enum: ['Proprietary', 'Public', 'Private'] },
          directorDetail: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              birthday: { format: 'date-time', type: 'string' },
              countryBirth: { type: 'string' },
              identificationDocuments: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    investorEntityDocument: {
                      type: 'object',
                      properties: { name: { type: 'string' } },
                      required: ['name'],
                    },
                  },
                  required: ['investorEntityDocument'],
                },
              },
            },
          },
          isApproved: { type: 'boolean' },
          name: { type: 'string' },
          tradingName: { type: 'string' },
          accountDesignation: { type: ['string', 'null'] },
          abnNumber: { type: 'string' },
          extractDocuments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                investorEntityDocument: {
                  type: 'object',
                  properties: { name: { type: 'string' } },
                  required: ['name'],
                },
              },
              required: ['investorEntityDocument'],
            },
          },
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          entityId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId', 'entityId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['IndividualJoint', 'Company', 'SuperTrust'],
          description: '`IndividualJoint` `Company` `SuperTrust`',
        },
        address: { type: 'string' },
        id: { type: 'string' },
        isApproved: { type: 'boolean' },
        ccEmail: { type: 'string' },
        taxFile: { type: ['string', 'null'], minLength: 9 },
        finclearAccountNumber: { type: ['string', 'null'] },
        primaryCountry: { type: 'string' },
        dvp: {
          type: 'object',
          properties: {
            hin: { type: 'string' },
            brokerIdentification: {
              type: 'object',
              properties: {
                pid: { type: 'string' },
                broker: {
                  type: 'object',
                  properties: { name: { type: ['string', 'null'] } },
                  required: ['name'],
                },
              },
              required: ['pid', 'broker'],
            },
          },
          required: ['hin', 'brokerIdentification'],
        },
        individualEntity: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            name: { type: 'string' },
            middleName: { type: ['string', 'null'] },
            surname: { type: 'string' },
            birthday: { format: 'date-time', type: 'string' },
            countryPassport: { type: 'string' },
            identificationDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investorEntityDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['investorEntityDocument'],
              },
            },
          },
          required: [
            'title',
            'name',
            'middleName',
            'surname',
            'birthday',
            'countryPassport',
            'identificationDocuments',
          ],
        },
        companyEntity: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['Proprietary', 'Public', 'Private'],
              description: '`Proprietary` `Public` `Private`',
            },
            name: { type: 'string' },
            tradingName: { type: 'string' },
            accountDesignation: { type: ['string', 'null'] },
            abnNumber: { type: 'string' },
            extractDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investorEntityDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['investorEntityDocument'],
              },
            },
            directorDetail: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                birthday: { format: 'date-time', type: 'string' },
                countryBirth: { type: 'string' },
                identificationDocuments: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      investorEntityDocument: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                        required: ['id', 'name'],
                      },
                    },
                    required: ['investorEntityDocument'],
                  },
                },
              },
              required: ['name', 'birthday', 'countryBirth', 'identificationDocuments'],
            },
          },
          required: [
            'type',
            'name',
            'tradingName',
            'accountDesignation',
            'abnNumber',
            'extractDocuments',
            'directorDetail',
          ],
        },
        trustEntity: {
          type: 'object',
          properties: {
            type: { type: 'string' },
            name: { type: 'string' },
            tradingName: { type: 'string' },
            accountDesignation: { type: ['string', 'null'] },
            abnNumber: { type: 'string' },
            uboList: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                  birthday: { format: 'date-time', type: 'string' },
                  countryBirth: { type: 'string' },
                  identificationDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                },
                required: ['id', 'name', 'birthday', 'countryBirth', 'identificationDocuments'],
              },
            },
            deedDocuments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  investorEntityDocument: {
                    type: 'object',
                    properties: { id: { type: 'string' }, name: { type: 'string' } },
                    required: ['id', 'name'],
                  },
                },
                required: ['investorEntityDocument'],
              },
            },
          },
          required: [
            'type',
            'name',
            'tradingName',
            'accountDesignation',
            'abnNumber',
            'uboList',
            'deedDocuments',
          ],
        },
      },
      required: [
        'type',
        'address',
        'id',
        'isApproved',
        'ccEmail',
        'taxFile',
        'finclearAccountNumber',
        'primaryCountry',
        'dvp',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorInboxAcceptTerms = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
          dealId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId', 'dealId'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorInboxList = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          investorId: { type: 'string', $schema: 'http://json-schema.org/draft-04/schema#' },
        },
        required: ['investorId'],
      },
      {
        type: 'object',
        properties: {
          page: { minimum: 1, type: 'number', $schema: 'http://json-schema.org/draft-04/schema#' },
          perPage: {
            minimum: 1,
            type: 'number',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: ['page', 'perPage'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                enum: ['Placement', 'MarketPlacement', 'Ipo', 'UnlistedInvestment'],
                description: '`Placement` `MarketPlacement` `Ipo` `UnlistedInvestment`',
              },
              id: { type: 'string' },
              createdAt: { format: 'date-time', type: 'string' },
              isActive: { type: 'boolean' },
              number: { type: 'string' },
              behindWallDeal: {
                type: ['object', 'null'],
                required: ['detail', 'terms', 'isActive', 'documents'],
                properties: {
                  detail: { type: ['string', 'null'] },
                  terms: { type: ['string', 'null'] },
                  isActive: { type: 'boolean' },
                  documents: {
                    type: 'array',
                    items: {
                      type: 'object',
                      required: ['dealDocument'],
                      properties: {
                        dealDocument: {
                          type: 'object',
                          required: ['id', 'name'],
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                        },
                      },
                    },
                  },
                  investorsAgreedTerms: {
                    type: 'array',
                    items: {
                      type: 'object',
                      required: ['investorId'],
                      properties: { investorId: { type: 'string' } },
                    },
                  },
                },
              },
              logs: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    event: {
                      type: 'string',
                      enum: ['DealCreated', 'BidPlaced', 'BidsClosed', 'DealComplete'],
                      description: '`DealCreated` `BidPlaced` `BidsClosed` `DealComplete`',
                    },
                    id: { type: 'string' },
                    createdAt: { format: 'date-time', type: 'string' },
                  },
                  required: ['event', 'id', 'createdAt'],
                },
              },
              bids: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'string' },
                    dealId: { type: 'string' },
                    entityBids: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          investmentAmount: { type: 'number' },
                          investorEntityId: { type: 'string' },
                          isAllocated: { type: 'boolean' },
                        },
                        required: ['investmentAmount', 'investorEntityId', 'isAllocated'],
                      },
                    },
                  },
                  required: ['id', 'dealId', 'entityBids'],
                },
              },
            },
            required: ['type', 'id', 'createdAt', 'isActive', 'number', 'bids'],
          },
        },
        pagination: {
          type: 'object',
          properties: {
            total: { type: 'number' },
            lastPage: { type: 'number' },
            currentPage: { type: 'number' },
            perPage: { type: 'number' },
            from: { type: 'number' },
            to: { type: 'number' },
          },
          required: ['total', 'lastPage', 'currentPage', 'perPage', 'from', 'to'],
        },
      },
      required: ['data', 'pagination'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const InvestorUpdate = {
  body: {
    type: 'object',
    properties: {
      identificationDocuments: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            document: {
              type: 'object',
              properties: { name: { type: 'string' } },
              required: ['name'],
            },
          },
          required: ['document'],
        },
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        rating: { type: 'number', minimum: 1 },
        status: {
          type: 'string',
          enum: ['Approved', 'Pending', 'Restrict'],
          description: '`Approved` `Pending` `Restrict`',
        },
        investmentMinSize: { type: ['number', 'null'], minimum: 1 },
        investmentMaxSize: { type: ['number', 'null'], minimum: 1 },
        isIdentificationDocumentApproved: { type: 'boolean' },
        isApproved: { type: 'boolean' },
        identificationDocuments: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              document: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
                required: ['id', 'name'],
              },
            },
            required: ['document'],
          },
        },
        entities: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                enum: ['IndividualJoint', 'Company', 'SuperTrust'],
                description: '`IndividualJoint` `Company` `SuperTrust`',
              },
              address: { type: 'string' },
              id: { type: 'string' },
              isApproved: { type: 'boolean' },
              ccEmail: { type: 'string' },
              taxFile: { type: ['string', 'null'], minLength: 9 },
              finclearAccountNumber: { type: ['string', 'null'] },
              primaryCountry: { type: 'string' },
              dvp: {
                type: 'object',
                properties: {
                  hin: { type: 'string' },
                  brokerIdentification: {
                    type: 'object',
                    properties: {
                      pid: { type: 'string' },
                      broker: {
                        type: 'object',
                        properties: { name: { type: ['string', 'null'] } },
                        required: ['name'],
                      },
                    },
                    required: ['pid', 'broker'],
                  },
                },
                required: ['hin', 'brokerIdentification'],
              },
              individualEntity: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  name: { type: 'string' },
                  middleName: { type: ['string', 'null'] },
                  surname: { type: 'string' },
                  birthday: { format: 'date-time', type: 'string' },
                  countryPassport: { type: 'string' },
                  identificationDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                },
                required: [
                  'title',
                  'name',
                  'middleName',
                  'surname',
                  'birthday',
                  'countryPassport',
                  'identificationDocuments',
                ],
              },
              companyEntity: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['Proprietary', 'Public', 'Private'],
                    description: '`Proprietary` `Public` `Private`',
                  },
                  name: { type: 'string' },
                  tradingName: { type: 'string' },
                  accountDesignation: { type: ['string', 'null'] },
                  abnNumber: { type: 'string' },
                  extractDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                  directorDetail: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      birthday: { format: 'date-time', type: 'string' },
                      countryBirth: { type: 'string' },
                      identificationDocuments: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            investorEntityDocument: {
                              type: 'object',
                              properties: { id: { type: 'string' }, name: { type: 'string' } },
                              required: ['id', 'name'],
                            },
                          },
                          required: ['investorEntityDocument'],
                        },
                      },
                    },
                    required: ['name', 'birthday', 'countryBirth', 'identificationDocuments'],
                  },
                },
                required: [
                  'type',
                  'name',
                  'tradingName',
                  'accountDesignation',
                  'abnNumber',
                  'extractDocuments',
                  'directorDetail',
                ],
              },
              trustEntity: {
                type: 'object',
                properties: {
                  type: { type: 'string' },
                  name: { type: 'string' },
                  tradingName: { type: 'string' },
                  accountDesignation: { type: ['string', 'null'] },
                  abnNumber: { type: 'string' },
                  uboList: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        birthday: { format: 'date-time', type: 'string' },
                        countryBirth: { type: 'string' },
                        identificationDocuments: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              investorEntityDocument: {
                                type: 'object',
                                properties: { id: { type: 'string' }, name: { type: 'string' } },
                                required: ['id', 'name'],
                              },
                            },
                            required: ['investorEntityDocument'],
                          },
                        },
                      },
                      required: [
                        'id',
                        'name',
                        'birthday',
                        'countryBirth',
                        'identificationDocuments',
                      ],
                    },
                  },
                  deedDocuments: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        investorEntityDocument: {
                          type: 'object',
                          properties: { id: { type: 'string' }, name: { type: 'string' } },
                          required: ['id', 'name'],
                        },
                      },
                      required: ['investorEntityDocument'],
                    },
                  },
                },
                required: [
                  'type',
                  'name',
                  'tradingName',
                  'accountDesignation',
                  'abnNumber',
                  'uboList',
                  'deedDocuments',
                ],
              },
            },
            required: [
              'type',
              'address',
              'id',
              'isApproved',
              'ccEmail',
              'taxFile',
              'finclearAccountNumber',
              'primaryCountry',
              'dvp',
            ],
          },
        },
        user: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            email: { type: 'string' },
            firstName: { type: 'string' },
            middleName: { type: ['string', 'null'] },
            lastName: { type: 'string' },
            title: { type: ['string', 'null'] },
            picture: { type: ['string', 'null'] },
            phoneNumber: {
              type: 'object',
              properties: {
                number: { type: 'string', description: 'Phone number', examples: ['0400000000'] },
                countryCode: {
                  type: 'string',
                  minLength: 1,
                  maxLength: 4,
                  description: 'Country code',
                  examples: ['61'],
                },
              },
              required: ['number', 'countryCode'],
            },
          },
          required: [
            'id',
            'email',
            'firstName',
            'middleName',
            'lastName',
            'title',
            'picture',
            'phoneNumber',
          ],
        },
        individualInvestor: {
          type: 'object',
          properties: {
            sophisticatedInvestorDocument: {
              type: 'object',
              properties: {
                isApproved: { type: 'boolean' },
                expiresAt: { format: 'date-time', type: 'string' },
                document: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                  required: ['id', 'name'],
                },
              },
              required: ['isApproved', 'expiresAt'],
            },
          },
        },
        brokerInvestor: {
          type: 'object',
          properties: {
            afslFormDocument: {
              type: 'object',
              properties: {
                isApproved: { type: 'boolean' },
                expiresAt: { format: 'date-time', type: 'string' },
                document: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                  required: ['id', 'name'],
                },
              },
              required: ['isApproved', 'expiresAt', 'document'],
            },
          },
          required: ['afslFormDocument'],
        },
      },
      required: [
        'rating',
        'status',
        'investmentMinSize',
        'investmentMaxSize',
        'isIdentificationDocumentApproved',
        'isApproved',
        'identificationDocuments',
        'entities',
        'user',
      ],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            message: { type: 'array', items: { type: 'string' } },
          },
          required: ['statusCode', 'message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: { message: { type: 'string' } },
          required: ['message'],
        },
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['data', 'httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        httpStatus: { type: 'number' },
        timestamp: { format: 'date-time', type: 'string' },
        method: {
          enum: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
          type: 'string',
          description: '`POST` `GET` `PUT` `PATCH` `DELETE`',
        },
      },
      required: ['httpStatus', 'timestamp', 'method'],
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
export {
  AdminBrokerInvestorAskForDocuments,
  AdminBrokerInvestorUpdateAfslFormStatus,
  AdminCompanyCreate,
  AdminCompanyGetById,
  AdminCompanyList,
  AdminCompanyUpdate,
  AdminDealCloseBids,
  AdminDealCreate,
  AdminDealGetById,
  AdminDealList,
  AdminDealLogList,
  AdminDealUpdate,
  AdminIndividualInvestorAskForDocuments,
  AdminIndividualInvestorChangeSiDocumentStatus,
  AdminInvestorEntityCreate,
  AdminInvestorEntityUpdate,
  AdminInvestorFindOne,
  AdminInvestorGroupAddInvestor,
  AdminInvestorGroupCreate,
  AdminInvestorGroupDelete,
  AdminInvestorGroupGet,
  AdminInvestorGroupList,
  AdminInvestorGroupRemoveInvestor,
  AdminInvestorGroupUpdate,
  AdminInvestorList,
  AdminInvestorUpdate,
  AppGetHello,
  AuthAdminCreate,
  AuthAdminLoginFirstStep,
  AuthAdminLoginSecondStep,
  AuthAdminMe,
  BidAdminCreate,
  BidAdminDelete,
  BidAdminUpdate,
  BidCreate,
  BrokerInvestorUpdate,
  DealAllocationCreate,
  DealAllocationFindOne,
  FileDownload,
  FileDownloadResize,
  FileUploadImage,
  HealthCheckCheck,
  IndividualInvestorUpdate,
  InvestorAuthConfirmRetrieve,
  InvestorAuthGetMe,
  InvestorAuthRetrieveAccount,
  InvestorAuthSignIn,
  InvestorAuthSignUpFirstStep,
  InvestorAuthSignUpSecondStep,
  InvestorDealFind,
  InvestorDealList,
  InvestorDealSubmitInterest,
  InvestorEntityCreate,
  InvestorEntityUpdate,
  InvestorInboxAcceptTerms,
  InvestorInboxList,
  InvestorUpdate,
};
