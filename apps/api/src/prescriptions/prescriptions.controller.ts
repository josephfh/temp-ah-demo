import { Controller, Get, Param } from '@nestjs/common';
import * as mockPrescriptionData from './mock/prescriptions.json';
import { PrescriptionsDTO } from 'types';

@Controller('prescriptions')
export class PrescriptionsController {
  @Get()
  getPrescriptions(): PrescriptionsDTO[] {
    // TODO: filter needed to clean JSON import - needs investigation
    return Object.values(mockPrescriptionData).filter((p) => p.prescriptionId);
  }
  @Get('/:id')
  getSinglePrescription(@Param() params: { id: number }) {
    // TODO: filter needed to clean JSON import - needs investigation
    return Object.values(mockPrescriptionData)
      .filter((p) => p.prescriptionId)
      .find((p) => params.id.toString() === p.prescriptionId?.toString());
  }
}
