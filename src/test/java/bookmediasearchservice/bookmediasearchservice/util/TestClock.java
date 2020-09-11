package bookmediasearchservice.bookmediasearchservice.util;

import io.micrometer.core.instrument.Clock;

public class TestClock implements Clock {

    @Override
    public long wallTime() {
        return 0;
    }

    @Override
    public long monotonicTime() {
        return 0;
    }
}
