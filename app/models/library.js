
function Library()
{
    collection = new Array(Book)
}



public void borrowBook(String title) {
    int found = 0;
    for (Book b : collection) {
        if (collection.getTitle().equals(title)) {
            if (found == 0) {
                found = 1;
            }
            if (!book.isBorrowed()) {
                book.borrowed();
                found = 2;
                break;
            };
        }
    }
    if (found == 0) {
        System.out.println("Not found");
    } else if (found == 1) {
        System.out.println("already borrowed");
    } else if (found == 2) {
        System.out.println("You successfully borrowed " + title);
    }
}
