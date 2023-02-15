interface newObj {
  [key: string]: any;
}

export interface resCod {
  code: number;
  message: string;
  obs?: string;
  json?: newObj;
}

// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
export class HTTPCode {
  // Respostas informativas
  readonly 100: resCod = { code: 100, message: 'Continue' };
  readonly 101: resCod = { code: 101, message: 'Switching Protocol' };
  readonly 102: resCod = { code: 102, message: 'Processing' };
  readonly 103: resCod = { code: 103, message: 'Early Hints' };

  // Respostas de sucesso
  readonly 200: resCod = { code: 200, message: 'OK' };
  readonly 201: resCod = { code: 201, message: 'Created' };
  readonly 202: resCod = { code: 202, message: 'Accepted' };
  readonly 203: resCod = {
    code: 203,
    message: 'Non-Authorative Information'
  };

  readonly 204: resCod = { code: 204, message: 'No Content' };
  readonly 205: resCod = { code: 205, message: 'Reset Content' };
  readonly 206: resCod = { code: 206, message: 'Partial Content' };
  readonly 207: resCod = { code: 207, message: 'Multi-Status' };
  readonly 208: resCod = { code: 208, message: 'Mult-Status-Inside-DAV' };
  readonly 226: resCod = { code: 226, message: 'IM Used' };

  // Mensagens de redirecionamento
  readonly 300: resCod = { code: 300, message: 'Multiple Choice' };
  readonly 301: resCod = { code: 301, message: 'Moved Permanetly' };
  readonly 302: resCod = { code: 302, message: 'Found' };
  readonly 303: resCod = { code: 303, message: 'See Other' };
  readonly 304: resCod = { code: 304, message: 'Not Modified' };
  readonly 307: resCod = { code: 306, message: 'Temporary Redirect' };
  readonly 308: resCod = { code: 308, message: 'Permanet Redirect' };

  // Respostas de erro do Cliente
  readonly 400: resCod = { code: 400, message: 'Bad Request' };
  readonly 401: resCod = { code: 401, message: 'Unauthorized' };
  readonly 403: resCod = { code: 403, message: 'Forbidden' };
  readonly 404: resCod = { code: 404, message: 'Not Found' };
  readonly 406: resCod = { code: 406, message: 'Not acceptable' };
  readonly 407: resCod = {
    code: 407,
    message: 'Proxy Authentication Required'
  };

  readonly 408: resCod = { code: 408, message: 'Resquest Timeout' };
  readonly 409: resCod = { code: 409, message: 'Conflict' };
  readonly 410: resCod = { code: 410, message: 'Gone' };
  readonly 411: resCod = { code: 411, message: 'Length Required' };
  readonly 412: resCod = { code: 412, message: 'Precondition Failed' };
  readonly 413: resCod = { code: 413, message: 'Payload Too Large' };
  readonly 414: resCod = { code: 414, message: 'URI Too Long' };
  readonly 415: resCod = { code: 415, message: 'Unsupported Media Type' };
  readonly 416: resCod = {
    code: 416,
    message: 'Requested Range Not Satisfiable'
  };

  readonly 417: resCod = { code: 417, message: 'Expectation Failed' };
  readonly 418: resCod = { code: 418, message: "I'm a Teapot" };
  readonly 421: resCod = { code: 421, message: 'Misdirected Request' };
  readonly 422: resCod = { code: 422, message: 'Unprocessable Entity' };
  readonly 423: resCod = { code: 423, message: 'Locked' };
  readonly 424: resCod = { code: 424, message: 'Failed Dependency' };
  readonly 425: resCod = { code: 425, message: 'Too Early' };
  readonly 426: resCod = { code: 426, message: 'Upgrade Required' };
  readonly 428: resCod = { code: 428, message: 'Precondition Required' };
  readonly 429: resCod = { code: 429, message: 'Too Many Requests' };
  readonly 431: resCod = {
    code: 431,
    message: 'Request Header Fields Too Large'
  };

  readonly 451: resCod = {
    code: 451,
    message: 'Unavailable For Legal Reasons'
  };

  // Respostas de erro do Servidor
  readonly 500: resCod = { code: 500, message: 'Internal Server Error' };
  readonly 501: resCod = { code: 501, message: 'Not Implemented' };
  readonly 502: resCod = { code: 502, message: 'Bad Gateway' };
  readonly 503: resCod = { code: 503, message: 'Service Unavailable' };
  readonly 504: resCod = { code: 504, message: 'Gateway Timeout' };
  readonly 505: resCod = {
    code: 505,
    message: 'HTTP Version Not Supported'
  };

  readonly 506: resCod = { code: 506, message: 'Variant Also Negotiates' };
  readonly 507: resCod = { code: 507, message: 'Insufficiente Storage' };
  readonly 508: resCod = { code: 508, message: 'Loop Detected' };
  readonly 510: resCod = { code: 510, message: 'Not Extended' };
  readonly 511: resCod = {
    code: 511,
    message: 'Network Authentication Required'
  };
}
