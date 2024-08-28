import { Request, Response } from "express";
import { WelcomeEmailSender } from "../application/Welcome-email-sender";


export class UserController {
    constructor(private readonly welcomeEmailSender: WelcomeEmailSender) {}

    async run(req: Request, res: Response) {
        const userId = req.params.id;
        await this.welcomeEmailSender.run(userId);
        res.status(201).send()
    }

}