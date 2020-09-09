package bookmediasearchservice.bookmediasearchservice.dto.itune;

/**
 * <p>
 * item types that can be searched on the iTune
 * these can be used in combination with entity to make search in types
 * </p>
 */
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
