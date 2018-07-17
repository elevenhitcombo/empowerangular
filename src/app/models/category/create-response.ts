import { Category } from "./category";

export class CreateResponse {
    category : Category;
    completedAt: Date;
    errorMessage: string;
    hasErrored: boolean;
}
