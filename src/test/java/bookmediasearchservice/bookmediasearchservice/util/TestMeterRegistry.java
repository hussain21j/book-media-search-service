package bookmediasearchservice.bookmediasearchservice.util;

import io.micrometer.core.instrument.*;
import io.micrometer.core.instrument.distribution.DistributionStatisticConfig;
import io.micrometer.core.instrument.distribution.pause.PauseDetector;

import java.util.concurrent.TimeUnit;
import java.util.function.ToDoubleFunction;
import java.util.function.ToLongFunction;

public class TestMeterRegistry extends MeterRegistry {

    public TestMeterRegistry() {
        super(new TestClock());
    }

    @Override
    protected <T> Gauge newGauge(Meter.Id id, T t, ToDoubleFunction<T> toDoubleFunction) {
        return null;
    }

    @Override
    protected Counter newCounter(Meter.Id id) {
        return null;
    }

    @Override
    protected Timer newTimer(Meter.Id id, DistributionStatisticConfig distributionStatisticConfig, PauseDetector pauseDetector) {
        return null;
    }

    @Override
    protected DistributionSummary newDistributionSummary(Meter.Id id, DistributionStatisticConfig distributionStatisticConfig, double v) {
        return null;
    }

    @Override
    protected Meter newMeter(Meter.Id id, Meter.Type type, Iterable<Measurement> iterable) {
        return null;
    }

    @Override
    protected <T> FunctionTimer newFunctionTimer(Meter.Id id, T t, ToLongFunction<T> toLongFunction, ToDoubleFunction<T> toDoubleFunction, TimeUnit timeUnit) {
        return null;
    }

    @Override
    protected <T> FunctionCounter newFunctionCounter(Meter.Id id, T t, ToDoubleFunction<T> toDoubleFunction) {
        return null;
    }

    @Override
    protected TimeUnit getBaseTimeUnit() {
        return null;
    }

    @Override
    protected DistributionStatisticConfig defaultHistogramConfig() {
        return null;
    }
}
