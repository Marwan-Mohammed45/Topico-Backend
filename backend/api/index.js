import app from '../backend/App.js';

export default function handler(req, res) {
  return app(req, res);
}
