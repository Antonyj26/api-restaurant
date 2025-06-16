import { Router } from "express";
import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";
import { tablesSessionsRoutes } from "./table-sessions-routes";

const routes = Router();

routes.use("/tables", tablesRoutes);
routes.use("/products", productsRoutes);
routes.use("/tables-sessions", tablesSessionsRoutes);

export { routes };
