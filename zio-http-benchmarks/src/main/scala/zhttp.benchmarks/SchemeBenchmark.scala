package zhttp.benchmarks
import org.openjdk.jmh.annotations._
import zhttp.http._

import java.util.concurrent.TimeUnit

@State(Scope.Thread)
@BenchmarkMode(Array(Mode.Throughput))
@OutputTimeUnit(TimeUnit.SECONDS)
class SchemeBenchmark {
  private val MAX = 1000000

  @Benchmark
  def benchmarkScheme(): Unit = {
    (0 to MAX).foreach(_ => Scheme.unsafeDecode("http"))
    ()
  }

  @Benchmark
  def benchmarkSchemeNotFound(): Unit = {
    (0 to MAX).foreach(_ => Scheme.unsafeDecode("htttps"))
    ()
  }
}
