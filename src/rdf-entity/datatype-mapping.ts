const {
    xsd,
    rdf
  } = {
    'xsd': 'http://www.w3.org/2001/XMLSchema#',
    'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
  };

export const RdfTypeMap = new Map<string,string>();

RdfTypeMap.set(`${xsd}string`, 'string');
RdfTypeMap.set(`${xsd}normalizedString`, 'string');
RdfTypeMap.set(`${xsd}anyURI`, 'string');
RdfTypeMap.set(`${xsd}base64Binary`, 'string');
RdfTypeMap.set(`${xsd}language`, 'string');
RdfTypeMap.set(`${xsd}Name`, 'string');
RdfTypeMap.set(`${xsd}NCName`, 'string');
RdfTypeMap.set(`${xsd}NMTOKEN`, 'string');
RdfTypeMap.set(`${xsd}token`, 'string');
RdfTypeMap.set(`${xsd}hexBinary`, 'string');
RdfTypeMap.set(`${rdf}langString`, 'string');

RdfTypeMap.set(`${xsd}boolean`, 'boolean');

RdfTypeMap.set(`${xsd}integer`, 'number');
RdfTypeMap.set(`${xsd}long`, 'number');
RdfTypeMap.set(`${xsd}int`, 'number');
RdfTypeMap.set(`${xsd}byte`, 'number');
RdfTypeMap.set(`${xsd}short`, 'number');
RdfTypeMap.set(`${xsd}negativeInteger`, 'number');
RdfTypeMap.set(`${xsd}nonNegativeInteger`, 'number');
RdfTypeMap.set(`${xsd}nonPositiveInteger`, 'number');
RdfTypeMap.set(`${xsd}positiveInteger`, 'number');
RdfTypeMap.set(`${xsd}unsignedByte`, 'number');
RdfTypeMap.set(`${xsd}unsignedInt`, 'number');
RdfTypeMap.set(`${xsd}unsignedLong`, 'number');
RdfTypeMap.set(`${xsd}unsignedShort`, 'number');
RdfTypeMap.set(`${xsd}double`, 'number');
RdfTypeMap.set(`${xsd}decimal`, 'number');
RdfTypeMap.set(`${xsd}float`, 'number');
RdfTypeMap.set(`${xsd}dateTime`, 'Date');
RdfTypeMap.set(`${xsd}date`, 'Date');
RdfTypeMap.set(`${xsd}gDay`, 'Date');
RdfTypeMap.set(`${xsd}gMonthDay`, 'Date');
RdfTypeMap.set(`${xsd}gYear`, 'Date');
RdfTypeMap.set(`${xsd}gYearMonth`, 'Date');

