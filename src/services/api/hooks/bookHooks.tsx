import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import {supabase} from '../index';

type Book = {
  id?: number;
  title: string;
  author: string;
  genre: string;
  publishedDate: string;
};

type UpdateBookPayload = {
  id: number;
  updatedData: Book;
};

const fetchBooks = async (): Promise<Book[]> => {
  let {data, error} = await supabase.from('Book').select('*');

  if (error) {
    throw error;
  }
  return data!;
};

const createBook = async (book: Book): Promise<Book[]> => {
  const {data, error} = await supabase.from('Book').insert([book]);
  if (error) {
    throw error;
  }
  return data!;
};

const updateBook = async ({
  id,
  updatedData,
}: UpdateBookPayload): Promise<Book[]> => {
  const {data, error} = await supabase
    .from('Book')
    .update(updatedData)
    .eq('id', id);
  if (error) {
    throw error;
  }
  return data!;
};

const deleteBook = async (id: number): Promise<Book[]> => {
  const {data, error} = await supabase.from('Book').delete().eq('id', id);
  if (error) {
    throw error;
  }
  return data!;
};

const useBooksCRUD = () => {
  const queryClient = useQueryClient();

  const booksQuery: UseQueryResult<Book[]> = useQuery('Book', fetchBooks);

  const createMutation: UseMutationResult<Book[], unknown, Book, unknown> =
    useMutation(createBook, {
      onSuccess: () => {
        queryClient.invalidateQueries('Book');
      },
    });

  const updateMutation: UseMutationResult<
    Book[],
    unknown,
    UpdateBookPayload,
    unknown
  > = useMutation(updateBook, {
    onSuccess: () => {
      queryClient.invalidateQueries('Book');
    },
  });

  const deleteMutation: UseMutationResult<Book[], unknown, number, unknown> =
    useMutation(deleteBook, {
      onSuccess: () => {
        queryClient.invalidateQueries('Book');
      },
    });

  return {
    ...booksQuery,
    createMutation,
    updateMutation,
    deleteMutation,
  };
};

export default useBooksCRUD;
