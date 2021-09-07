import Messagedata from "./MessageData";
import fs from 'fs/promises'

export default class MessageDataFile implements Messagedata {
  async read(language: string): Promise<string> {
    return fs.readFile(`./src/message/${language}.txt`, 'utf8')
  }
}
