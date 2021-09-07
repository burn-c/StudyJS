export default interface Messagedata {
  read(language: string): Promise<string>;
}
