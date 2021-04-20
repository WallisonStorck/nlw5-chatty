import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const routes = Router();

/**
 * Tipos de Parâmetros
 * Routes Params => Parâmetros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body Params => {
 * 
 * }
 */

const settingsController = new SettingsController();

routes.post('/settings', settingsController.create)

export { routes };