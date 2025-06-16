import { Router } from "express";
import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";

const routes = Router();

routes.use("/tables", tablesRoutes);
routes.use("/products", productsRoutes);

export { routes };
