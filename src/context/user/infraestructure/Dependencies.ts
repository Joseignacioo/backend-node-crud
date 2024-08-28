import { WelcomeEmailSender } from "../application/Welcome-email-sender";
import { UserController } from "./UserController";

export const welcomeEmailSender = new WelcomeEmailSender();
export const userController = new UserController(welcomeEmailSender);
