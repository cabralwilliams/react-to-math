import React, { useState, useEffect } from "react";
import Footer from "..";
import { render, cleanup, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Footer renders', () => {
    it('renders', () => {
        render(<Footer />);
    });
});