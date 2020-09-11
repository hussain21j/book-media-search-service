package bookmediasearchservice.bookmediasearchservice.util;

import io.micrometer.core.instrument.Timer;
import io.micrometer.core.instrument.distribution.HistogramSnapshot;

import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;
import java.util.function.Supplier;

/**
 * Dummy Timer class for testing
 */
public class TestTimer implements Timer {
    @Override
    public void record(long l, TimeUnit timeUnit) {

    }

    @Override
    public <T> T record(Supplier<T> supplier) {
        return null;
    }

    @Override
    public <T> T recordCallable(Callable<T> callable) throws Exception {
        return null;
    }

    @Override
    public void record(Runnable runnable) {

    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public double totalTime(TimeUnit timeUnit) {
        return 0;
    }

    @Override
    public double max(TimeUnit timeUnit) {
        return 0;
    }

    @Override
    public TimeUnit baseTimeUnit() {
        return null;
    }

    @Override
    public HistogramSnapshot takeSnapshot() {
        return null;
    }

    @Override
    public Id getId() {
        return null;
    }
}
