export interface BookModel {
    id: number;
    Title: string;
    Subtitle: string;
    BookCover: string;
    Authors: Author[];
}
export interface Author{
    id: number;
    firstName: string;
    lastName: string;
    books: string[];
}
