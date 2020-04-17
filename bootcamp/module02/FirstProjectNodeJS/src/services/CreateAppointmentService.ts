import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/**
 * Receiving information
 * Handling errors/exceptions
 * Access to the repository
 */

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    // Create instance
    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    // Save on database
    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;