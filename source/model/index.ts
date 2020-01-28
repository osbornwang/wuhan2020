import { History } from 'cell-router/source';

import { Session } from './Session';
import { SuppliesRequirementModel } from './SuppliesRequirement';
import { HotelCanStayingModel } from './HotelCanStaying';
import { GitHubModel } from './GitHub';

export const history = new History();
export const session = new Session();
export const suppliesRequirement = new SuppliesRequirementModel();
export const hotelCanStaying = new HotelCanStayingModel();

export const repository = new GitHubModel({
    owner: 'EasyWebApp',
    repo: 'wuhan2020'
});

export * from './HTTPService';
export * from './SuppliesRequirement';
export * from './AMap';
export * from './HotelCanStaying';
