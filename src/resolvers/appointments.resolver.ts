import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";

import { CreateAppointmentInput } from "../dtos/inputs";
import { Appointment, Customer } from "../dtos/models";

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    // Integrate with DB and show existing appointments;
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      }
    ];
  };

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    return appointment;
  };

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment);

    return {
      name: 'John Doe',
    };
  };
};
