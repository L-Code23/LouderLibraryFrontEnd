export interface AuthorModel {
    firstName: string;
    lastName: string;
    Books: Book[];
}

export interface Book{
    id: number;
    title: string;
    subtitle: string;
    bookCover: string;
    authors: string[];

}
