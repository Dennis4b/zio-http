import io.netty.buffer.{ByteBuf, Unpooled}
import zhttp.experiment.HttpMessage.{BufferedResponse, CompleteResponse, HResponse}
import zhttp.experiment._
import zhttp.http._
import zhttp.service.Server
import zio._

object HelloWorld extends App {

  val h1: HttpEndpoint[Any, Nothing] = HttpEndpoint.mount {
    Http.collect[CompleteRequest[ByteBuf]]({ case req => CompleteResponse(content = req.content) })
  }

  val h2: HttpEndpoint[Any, Nothing] = HttpEndpoint.mount {
    Http.collect[AnyRequest]({ case req => HResponse(headers = req.headers, content = HContent.echo) })
  }

  val h3: HttpEndpoint[Any, Nothing] = HttpEndpoint.mount {
    Http.collect[BufferedRequest[ByteBuf]]({ case req => BufferedResponse(content = req.content) })
  }

  val h4: HttpEndpoint[Any, Nothing] = HttpEndpoint.mount {
    Http.collect[CompleteRequest[ByteBuf]] {
      case req if req.url.path == Root / "health" => CompleteResponse(content = Unpooled.copiedBuffer("Ok".getBytes()))
    }
  }

  val app: HttpEndpoint[Any, Nothing] = h1 <> h2 <> h3 <> h4

  // Run it like any simple app
  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =
    Server.start0(8090, app).exitCode
}
