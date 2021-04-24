import { json, Request, Response } from 'express';
import { SettingsServices } from '../services/SettingsServices';

class SettingsController {

  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsServices = new SettingsServices();

    try {
      const settings = await settingsServices.create({ chat, username })
      return response.json(settings);

    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });

    }
  }

  async findByUserName(request: Request, response: Response) {
    const { username } = request.params;

    const settingsServices = new SettingsServices();

    const settings = await settingsServices.findByUserName(username);

    return response.json(settings);
  }

  async update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;

    const settingsServices = new SettingsServices();

    const settings = await settingsServices.update(username, chat);

    return response.json(settings);
  }

}

export { SettingsController };