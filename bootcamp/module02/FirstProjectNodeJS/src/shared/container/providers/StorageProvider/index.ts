import { container } from 'tsyringe';
import IStorageProvider from './models/IStorageProvider';
import DiskStorageProvider from './implementations/DiskStorageProvider';
import IMailProvider from '../MailProvider/models/IMailProvider';
import EtherealMailProvider from '../MailProvider/implementations/EtherealMailProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailProvider>(
  'MailProvider',
  EtherealMailProvider,
);
