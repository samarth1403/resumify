"use client";
import React, { useState } from "react";
import TextAreaField from "./TextAreaField";
import Button from "./Button";
import Section from "./Section";
import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import FormField from "./FormField";
import toast from "react-hot-toast";
import { validateReview } from "../Validation/Validation";

const WriteReview = ({ type }: { type: string }) => {
  const [star, setStar] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});

  const handleSubmit = async () => {
    const errors = validateReview({ name, star });
    if (Object.keys(errors).length > 0) {
      toast.error("Please fill required field");
      setErrors(errors);
      return;
    }
    try {
      const response = await axios.post("/api/review/create", {
        name,
        rating: star,
        comment,
        type,
      });
      if (response.status === 200) {
        toast.success("Review Submitted Successfully");
        setStar(0);
        setComment("");
        setName("");
      }
    } catch (error) {
      toast.error("Failed to submit review");
    }
  };

  return (
    <Section
      className="w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="my-4 flex w-full flex-col flex-nowrap items-center justify-center">
        <div className="flex w-64 flex-col flex-nowrap items-center justify-center gap-4 sm:w-72 lg:w-96">
          <p className="h5 text-center ">{`Write a Review about ${type === "resume" ? "Resume" : "Cover Letter"}`}</p>
          <div className="w-full">
            <FormField
              label="Name"
              type="text"
              name="name"
              value={name || ""}
              setValue={(key, value) => {
                setName(value as string);
              }}
              placeholder="Name"
              className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
              error={errors.name}
              isRequired
              iconPath="/assets/images/person.svg"
            />
          </div>
          <div className="flex w-full flex-row flex-wrap items-center justify-start gap-4">
            <p className="body-1">Rating :</p>
            <Rating
              style={{ maxWidth: 150 }}
              value={star}
              onChange={setStar}
              radius="large"
              spaceInside="small"
            />
            {errors?.star && (
              <span className="text-[0.85rem] text-red-700">
                {errors?.star?.message}
              </span>
            )}
            {/* <Rating /> */}
          </div>
          <div className="w-full">
            <TextAreaField
              name="comment"
              value={comment}
              setValue={(key, value) => setComment(value)}
              rows={6}
              label="Comment"
              placeholder="Write a comment..."
              className={`w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none`}
              iconPath="/assets/images/comment.svg"
              iconFromTop="top-10"
            />
          </div>
          <Button
            onClick={handleSubmit}
            //   className="pr-3"
          >
            Submit
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default WriteReview;
