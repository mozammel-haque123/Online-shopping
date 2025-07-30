
const AddReview = () => {


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const reviewData = {
      image: form.image.value,
      title: form.title.value,
      description: form.description.value,
      rating: parseInt(form.rating.value),
      year: parseInt(form.year.value),
      genre: form.genre.value,
    };
  console.log(reviewData)
   
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Add Game Review 🎮</h2>
         
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
        <input type="text" name="image" placeholder="Game Cover Image URL" className="input w-full input-bordered"  />
        <input type="text" name="title" placeholder="Game Title" className="input input-bordered w-full"  />
        <textarea name="description" placeholder="Review Description" className="textarea textarea-bordered w-full" ></textarea>
        <input type="number" name="rating" placeholder="Rating (1-10)" className="input input-bordered w-full" min="1" max="10"  />
        <input type="number" name="year" placeholder="Publishing Year (e.g. 2024)" className="input input-bordered w-full"  />
        <select name="genre" className="select select-bordered w-full" >
          <option value="">Select Genre</option>
          <option>Action</option>
          <option>Adventure</option>
          <option>Strategy</option>
          <option>Sports</option>
          <option>Racing</option>
          <option>RPG</option>
        </select>
        <input type="email" name="email" placeholder="Email" className="input input-bordered bg-gray-100 w-full"  />
        <input type="text" name="name" placeholder="Name" className="input input-bordered bg-gray-100 w-full"  />
        <button type="submit" className="btn bg-amber-500 text-white mt-4">Submit Review</button>
      </form>
    </div>
  );
};

export default AddReview;
