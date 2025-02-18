import Collection from './Collection';

export type EntryObject = {
  directory: boolean;
  fullPath: string;
  modified: number;
  size?: number;
  mimeType?: string;
};

const getTag = (doc: Element, tag: string): Element =>
    doc.getElementsByTagName(tag)[0],
  getTagContent = (doc: Element, tag: string): string => {
    const node = getTag(doc, tag);

    return node ? node.textContent : '';
  };

export class Response {
  #readOnly: boolean;
  #collection: Collection;
  #document: Document;
  #parser: DOMParser;

  constructor(readOnly: boolean, rawDocument: string, parser: DOMParser = new DOMParser()) {
    this.#readOnly = readOnly;
    this.#parser = parser;
    this.#document = parser.parseFromString(rawDocument, 'application/xml');
  }

  collection({ sortDirectoriesFirst = false } = {}): Collection {
    if (!this.#collection) {
      this.#collection = new Collection(
        this.#readOnly,
        this.responseToPrimitives(
          this.#document.getElementsByTagName('D:response')
        ),
        {
          sortDirectoriesFirst,
        }
      );
    }

    return this.#collection;
  }

  responseToPrimitives(
    responses: HTMLCollection = this.#document.getElementsByTagName(
      'D:response'
    )
  ): EntryObject[] {
    return Array.from(responses).map(
      (response): EntryObject => ({
        directory: !!getTag(response, 'D:collection'),
        fullPath: getTagContent(response, 'D:href'),
        modified: Date.parse(
          getTagContent(response, 'lp1:getlastmodified') ||
            getTagContent(response, 'D:getlastmodified')
        ),
        size: parseInt(
          getTagContent(response, 'lp1:getcontentlength') ||
            getTagContent(response, 'D:getcontentlength'),
          10
        ),
        mimeType: getTagContent(response, 'D:getcontenttype'),
      })
    );
  }
}

export default Response;
