package bookmediasearchservice.bookmediasearchservice.dto;

public enum  SearchItemType {
    BOOK("Book"),
    ALBUM("Album");

    private final String type;
    private SearchItemType(String type) {
        this.type = type;
    }
    public String getType() {
        return this.type;
    }

}
