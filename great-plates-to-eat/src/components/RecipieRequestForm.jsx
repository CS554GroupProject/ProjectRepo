import React from 'react';

const RecipieRequestForm = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <form>
          <div className="form-group">
            <label htmlFor="input1"></label>
            <input
              type="text"
              className="form-control"
              id="input1"
              placeholder="Enter query"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">
              Select number of recipes to receive
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default RecipieRequestForm;
