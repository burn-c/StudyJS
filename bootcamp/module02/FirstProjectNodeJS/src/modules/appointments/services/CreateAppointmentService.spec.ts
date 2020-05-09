import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '1231321321313',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1231321321313');
  });

  // it('should NOT be able to create two appointments on the same time', () => {
  //   expect().toBe();
  // });
});
