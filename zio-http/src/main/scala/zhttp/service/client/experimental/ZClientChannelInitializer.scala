package zhttp.service.client.experimental

import io.netty.channel.{Channel, ChannelHandler, ChannelInitializer, ChannelPipeline}
import io.netty.handler.codec.http.{HttpClientCodec, HttpObjectAggregator}
//import io.netty.handler.timeout.IdleStateHandler
import zhttp.service.client.ClientSSLHandler.ClientSSLOptions
import zhttp.service.client.ClientSSLHandler

final case class ZClientChannelInitializer[R](
                         channelHandler: ChannelHandler,
                         scheme: String,
                         sslOption: ClientSSLOptions = ClientSSLOptions.DefaultSSL,
                       ) extends ChannelInitializer[Channel]() {
  var fixedCh: Channel = null
  override def initChannel(ch: Channel): Unit = {
    println(s"INIT CHANNEL :: $ch")
    println(s"INIT CHANNEL CH :: ${ch.pipeline().firstContext()}")

    val p: ChannelPipeline = ch
      .pipeline()
      .addLast(new HttpClientCodec)
      .addLast("idleStateHandler"
        , new io.netty.handler.timeout.IdleStateHandler(0
          , 0
          , 6))
      .addLast("myHandler", new ZIdleStateAwareHandler)
      .addLast(new HttpObjectAggregator(Int.MaxValue))
//      .addLast(HTTP_KEEPALIVE_HANDLER, new HttpServerKeepAliveHandler)
      .addLast(new ZClientResponseHandler())
      .addLast(channelHandler)

//    ch.pipeline().channel()
    if (scheme == "https") {
      p.addFirst(ClientSSLHandler.ssl(sslOption).newHandler(ch.alloc))
    }
    ()
  }
}
