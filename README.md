# CTA Component Documentation

## Type Definition
The CTA (Call To Action) component accepts the following properties:

### CTA Properties

| Property    | Type            | Required | Default | Constraints                                   | Description                                    |
|------------|-----------------|----------|---------|-----------------------------------------------|------------------------------------------------|
| `label`    | string         | Yes      | -       | Min: 2 chars, Max: 50 chars                   | The label text for the CTA component           |
| `title`    | string         | Yes      | -       | Min: 5 chars, Max: 100 chars                  | The main title/heading of the CTA              |
| `bodyCopy` | string         | No       | `null`  | Max: 300 chars                                | Optional descriptive text below the title      |
| `button`   | ButtonProps    | No       | `null`  | -                                             | Optional button configuration                   |
| `blocks`   | CTABlockProps[]| Yes      | -       | Must contain exactly 2 blocks                 | Array of content blocks within the CTA         |

### Button Properties
When including a button, it should have the following properties:

| Property | Type   | Required | Default | Constraints                | Description                    |
|----------|--------|----------|---------|----------------------------|--------------------------------|
| `text`   | string | Yes      | -       | Min: 2 chars, Max: 30 chars| The text shown on the button   |
| `url`    | string | Yes      | -       | Min: 1 char, Max: 200 chars| The URL the button links to    |

### CTABlock Properties
Each block in the `blocks` array should have the following properties:

| Property    | Type   | Required | Default | Constraints                  | Description                                |
|------------|--------|----------|---------|------------------------------|-------------------------------------------|
| `id`       | string | Yes      | -       | Min: 3 chars, Max: 50 chars  | Unique identifier for the block            |
| `title`    | string | Yes      | -       | Min: 3 chars, Max: 80 chars  | The main title of the block               |
| `subTitle` | string | Yes      | -       | Min: 3 chars, Max: 150 chars | Secondary text/description for the block   |
| `url`      | string | Yes      | -       | Min: 1 char, Max: 200 chars  | URL for the block's link/action           |
| `imageUrl` | string | Yes      | -       | Min: 1 char, Max: 200 chars  | URL for the block's associated image      |

Note: `-` indicates that there is no default value and the field must be provided.

### Usage Example

```typescript
const ctaExample: CTA = {
  label: "Featured",
  title: "Get Started Today",
  bodyCopy: "Transform your business with our solutions",
  button: {
    text: "Learn More",
    url: "/get-started"
  },
  blocks: [  // Must always contain exactly 2 blocks
    {
      id: "block-1",
      title: "Feature One",
      subTitle: "Discover amazing capabilities",
      url: "/feature-one",
      imageUrl: "/images/feature-one.jpg"
    },
    {
      id: "block-2",
      title: "Feature Two",
      subTitle: "Enhanced performance",
      url: "/feature-two",
      imageUrl: "/images/feature-two.jpg"
    }
  ]
};
```

### Notes
- The `label` and `title` fields are required and must be non-empty strings
- `bodyCopy` is optional but when provided should be a meaningful description
- If `button` is provided, both `text` and `url` properties are required
- `blocks` array must contain exactly 2 CTABlockProps elements
- All CTABlock properties are required and must be non-empty strings
- Image URLs should point to valid image resources
- Block IDs should be unique within the CTA component
- All string lengths must fall within their specified min/max constraints

### Validation Rules
1. String length constraints must be strictly followed
2. The `blocks` array must always contain exactly 2 elements
3. All URLs must be valid and properly formatted
4. Block IDs must be unique within the CTA component
5. All required fields must be provided and non-empty

### Best Practices
1. Keep the `label` concise and descriptive
2. Use clear and action-oriented text for button labels
3. Ensure URLs in button configurations are valid
4. Provide meaningful body copy that adds value to the title
5. Use descriptive and SEO-friendly image URLs
6. Keep block titles and subtitles concise but informative
7. Follow a consistent naming convention for block IDs
8. Optimize images before setting their URLs