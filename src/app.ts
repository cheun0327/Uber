import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";

class App {  
  public app: GraphQLServer;
  constructor() {  //app class를 새로 시작할 때마다 호출되는 함수
    this.app = new GraphQLServer({});
    this.middlewares();
  }
  private middlewares = (): void => {
    this.app.express.use(cors()); //graphQL은 express를 포함하고 있다.
    this.app.express.use(logger("dev")); //logger의 type를 dev로 선언
    this.app.express.use(helmet());
  };
}

export default new App().app;